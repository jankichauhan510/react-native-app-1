import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function StatusBarDemo() {
  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Text style={styles.text}>StatusBar Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
