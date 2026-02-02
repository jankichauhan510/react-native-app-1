import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TextInputDemo() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
        TextInputDemo
      </Text>

      <TextInput
        placeholder="Enter Your name"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>

      <Text style={{ color: "white" }}>You Entered: {name}</Text>

      <Button
        title="clear input"
        onPress={() => {
          setName("");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    color: "gray",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
