import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FetchDataCComponent() {
  const [data, setData] = useState<{
    title: string;
    body: string;
  } | null>(null);

  const getAPIData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/1";
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <View style={styles.card}>
          <Text style={styles.label}>Title</Text>
          <Text style={styles.title}>{data.title}</Text>

          <Text style={styles.label}>Body</Text>
          <Text style={styles.body}>{data.body}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // light gray background
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b7280", // gray
    marginTop: 12,
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
  loading: {
    textAlign: "center",
    fontSize: 16,
    color: "#6b7280",
  },
});
