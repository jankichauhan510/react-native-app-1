import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function UseColorSchemeHook() {
  const colorScheme = useColorScheme(); // "light" or "dark"

  const isDarkMode = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#000" : "#fff" },
      ]}
    >
      <Text style={{ color: isDarkMode ? "#fff" : "#000", fontSize: 18 }}>
        Current Theme: {isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
