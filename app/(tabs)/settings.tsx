import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.item}>
        <Text style={styles.itemText}>Account</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Notifications</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Privacy</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.logout}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#4f46e5",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
    color: "#111827",
  },
  logout: {
    fontSize: 16,
    color: "#dc2626",
    fontWeight: "600",
  },
});
