import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function LongPressMenu() {
  const showOptions = () => {
    Alert.alert("Message Options", "Choose an action", [
      { text: "Edit", onPress: () => console.log("Edit pressed") },
      {
        text: "Delete",
        onPress: () => console.log("Delete pressed"),
        style: "destructive",
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pressable Demo</Text>

      <Pressable
        onPress={() => console.log("Message tapped")}
        onLongPress={showOptions}
        delayLongPress={700}
        style={({ pressed }) => [styles.messageBox, pressed && styles.pressed]}
      >
        <Text style={styles.messageText}>Hello 👋 Long press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6200ee",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  messageBox: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 8,
    maxWidth: "75%",
  },
  pressed: {
    backgroundColor: "#d6d6d6",
  },
  messageText: {
    fontSize: 16,
  },
});
