import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function PlatformDemo() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Platform Demo</Text>

      <Text style={styles.textStyle}>{Platform.OS}</Text>

      <Text style={styles.textStyle}>{JSON.stringify(Platform)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
  },
});
