import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import EditUserModal from "./EditUserModal";

type Post = {
  id: string;
  name: string;
  email: string;
};

export default function READData() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [editVisible, setEditVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Post | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<Post[]>([]);

  const handleEdit = (item: Post) => {
    setSelectedUser(item);
    setEditName(item.name);
    setEditEmail(item.email);
    setEditVisible(true);
  };

  const handleUpdateData = async () => {
    if (!selectedUser) return;

    const updatedUser = {
      id: selectedUser.id,
      name: editName,
      email: editEmail,
    };

    try {
      const res = await fetch(
        `http://10.17.167.128:3000/users/${selectedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      const updatedFromServer = await res.json();

      // ✅ FIX IS HERE
      const updatedList = data.map((u) =>
        u.id === selectedUser.id ? updatedFromServer : u,
      );

      setData(updatedList);
      alert("✅ Data updated successfully");
      setEditVisible(false);
    } catch (error) {
      console.error("Update error:", error);
      Alert.alert("Error", "Failed to update user");
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert("Delete User", "Are you sure you want to delete this user?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            const res = await fetch(`http://10.17.167.128:3000/users/${id}`, {
              method: "DELETE",
            });

            if (!res.ok) {
              throw new Error("Failed to delete user");
            }

            alert("✅ Data deleted successfully");

            // ✅ Update UI after delete
            const filteredData = data.filter((u) => u.id !== id);
            setData(filteredData);
          } catch (error) {
            console.error("Delete error:", error);
            Alert.alert("Error", "Failed to delete user");
          }
        },
      },
    ]);
  };

  const getAPIData = async () => {
    try {
      const url = "http://10.17.167.128:3000/users";
      const res = await fetch(url);
      const result = await res.json();

      setData(result);
      setFilteredData(result); // 👈 important
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);

    if (!text.trim()) {
      setFilteredData(data);
      return;
    }

    const lowerText = text.toLowerCase();

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerText) ||
        item.email.toLowerCase().includes(lowerText) ||
        item.id.toString().includes(lowerText),
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.row}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      {/* User Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>

      {/* Action Icons */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Ionicons name="create-outline" size={22} color="#2563eb" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={{ marginLeft: 12 }}
        >
          <Ionicons name="trash-outline" size={22} color="#dc2626" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search by name, email "
          value={searchText}
          onChangeText={handleSearch}
          style={styles.searchInput}
          placeholderTextColor="#9ca3af"
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
      <EditUserModal
        visible={editVisible}
        user={selectedUser}
        name={editName}
        email={editEmail}
        onChangeName={setEditName}
        onChangeEmail={setEditEmail}
        onClose={() => setEditVisible(false)}
        onSave={handleUpdateData}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafb",
    paddingVertical: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 14,
    borderRadius: 12,
    elevation: 2,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  info: {
    marginLeft: 12,
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  email: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 2,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#111827",
  },
});
