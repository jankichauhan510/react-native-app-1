import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function LongPressMenu() {
  const [actionMessage, setActionMessage] = useState("");

  const showOptions = () => {
    Alert.alert("Message Options", "Choose an action", [
      {
        text: "Edit",
        onPress: () => setActionMessage("Action selected: Edit"),
      },
      {
        text: "Delete",
        onPress: () => setActionMessage("Action selected: Delete"),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => setActionMessage("Action selected: Cancel"),
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pressable Demo</Text>

      <Pressable
        onPress={() => setActionMessage("Message tapped")}
        onLongPress={showOptions}
        delayLongPress={700}
        style={({ pressed }) => [styles.messageBox, pressed && styles.pressed]}
      >
        <Text style={styles.messageText}>Hello 👋 Long press me</Text>
      </Pressable>

      {/* Action result message */}
      {actionMessage !== "" && (
        <Text style={styles.actionText}>{actionMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6200ee",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
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
  actionText: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
    fontStyle: "italic",
  },
});
