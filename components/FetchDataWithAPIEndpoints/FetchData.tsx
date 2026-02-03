import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function FetchDataCComponent() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const getAPIData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Title</Text>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.label}>Body</Text>
      <Text style={styles.body}>{item.body}</Text>
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
    // <ScrollView style={styles.container}>
    //   {data.map((item) => (
    //     <View key={item.id} style={styles.card}>
    //       <Text style={styles.label}>Title</Text>
    //       <Text style={styles.title}>{item.title}</Text>

    //       <Text style={styles.label}>Body</Text>
    //       <Text style={styles.body}>{item.body}</Text>
    //     </View>
    //   ))}
    // </ScrollView>

    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b7280",
    marginTop: 8,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
});
