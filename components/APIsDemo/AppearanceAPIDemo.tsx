import React, { useEffect, useState } from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";

export default function AppearanceAPIDemo() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    // Listen for theme changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const isDarkMode = theme === "dark";

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
