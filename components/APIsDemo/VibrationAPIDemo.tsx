import React from "react";
import { Button, StyleSheet, Text, Vibration, View } from "react-native";

export default function VibrationAPIDemo() {
  // Simple vibration
  const simpleVibration = () => {
    Vibration.vibrate(500); // vibrate for 0.5 second
  };

  // Pattern vibration
  const patternVibration = () => {
    Vibration.vibrate([0, 500, 300, 1000]);
    /*
      Pattern meaning:
      0 ms   → start immediately
      500 ms → vibrate
      300 ms → pause
      1000 ms → vibrate
    */
  };

  // Stop vibration
  const stopVibration = () => {
    Vibration.cancel();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vibration API Demo</Text>

      <Button title="Simple Vibration" onPress={simpleVibration} />
      <View style={styles.space} />

      <Button title="Pattern Vibration" onPress={patternVibration} />
      <View style={styles.space} />

      <Button title="Stop Vibration" onPress={stopVibration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  space: {
    height: 12,
  },
});
