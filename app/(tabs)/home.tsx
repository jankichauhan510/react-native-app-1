import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

/* ---------- Top Tab Screens ---------- */

function PostsScreen() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabText}>📸 Posts Content</Text>
    </View>
  );
}

function VideosScreen() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabText}>🎥 Videos Content</Text>
    </View>
  );
}

/* ---------- Home Screen ---------- */

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Welcome to the Home tab 🚀</Text>
      </View>

      {/* Top Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "#4f46e5",
            height: 3,
          },
          tabBarLabelStyle: {
            fontWeight: "600",
          },
          tabBarActiveTintColor: "#4f46e5",
          tabBarInactiveTintColor: "#6b7280",
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
      </Tab.Navigator>
    </View>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#4f46e5",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  tabContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
});
