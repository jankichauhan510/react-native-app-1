import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Alert API Demo Component</Text>
      <Button title="Show simple Alert" onPress={handleSimplePress} />
      <Button
        title="Show Alert with Buttons"
        onPress={handleAlertWithButtons}
      />
      <Button
        title="Show Alert with Custom Action"
        onPress={handleAlertWithCustomAction}
      />
      <Button
        title="Show Three Button Alert"
        onPress={createThreeButtonAlert}
      />
      <Button title="Make own alert" onPress={handleCustomAlert} />
    </View>
  );
}

const styles = StyleSheet.create({});
