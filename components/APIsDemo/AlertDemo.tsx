import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const handleSimplePress = () => {
  Alert.alert("Hello", "This is a simple alert");
};

const handleAlertWithButtons = () => {
  Alert.alert("Delete Item", "Are you sure you want to delete this?", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Delete",
      onPress: () => console.log("Deleted"),
      style: "destructive",
    },
  ]);
};

const handleAlertWithCustomAction = () => {
  Alert.alert("Success", "Profile updated", [
    { text: "OK", onPress: () => console.log("OK pressed") },
  ]);
};

const createThreeButtonAlert = () =>
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Ask me later",
      onPress: () => console.log("Ask me later pressed"),
    },
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const handleCustomAlert = () => {
  Alert.alert(
    "Custom Alert",
    "This is a custom alert message.",
    [
      { text: "Option 1", onPress: () => console.log("Option 1 Pressed") },
      { text: "Option 2", onPress: () => console.log("Option 2 Pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ],
    { cancelable: true },
  );
};

export default function AlertDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 Alert API Demo</Text>

      <Pressable style={styles.button} onPress={handleSimplePress}>
        <Text style={styles.buttonText}>Show Simple Alert</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleAlertWithButtons}>
        <Text style={styles.buttonText}>Alert with Buttons</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleAlertWithCustomAction}>
        <Text style={styles.buttonText}>Custom Action Alert</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={createThreeButtonAlert}>
        <Text style={styles.buttonText}>Three Button Alert</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.outlineButton]}
        onPress={handleCustomAlert}
      >
        <Text style={[styles.buttonText, styles.outlineText]}>
          Make Your Own Alert
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    color: "#111827",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#2563EB",
  },
  outlineText: {
    color: "#2563EB",
  },
});
