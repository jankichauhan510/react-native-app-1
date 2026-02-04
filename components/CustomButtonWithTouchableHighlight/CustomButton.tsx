import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function CustomButton() {
  const handlePress = () => {
    alert("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CustomButton style with TouchableHighlight
      </Text>

      <TouchableHighlight onPress={handlePress} underlayColor="#ebe7e7">
        <View style={styles.button1}>
          <Text style={styles.buttonText}>Button</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // white bg
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6200ee",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  button1: {
    fontSize: 20,
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
