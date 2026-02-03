import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function CURDDataJSONServer() {
  const saveData = async () => {
    const data = {
      id: 9,
      name: "Khyati",
      email: "khyati@gmail.com",
    };

    const url = "http://10.17.167.128:3000/users"; // put your API endpoint here

    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await result.json();
      if (response) {
        alert("Data saved");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <View>
      <Button title="Save Data" onPress={saveData}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
