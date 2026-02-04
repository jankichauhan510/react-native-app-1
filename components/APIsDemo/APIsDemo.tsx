import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function APIsDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>APIs Demo</Text>
      <Text style={styles.subtitle}>
        React Native APIs are built-in tools for using mobile features in your
        app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // pure white
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
