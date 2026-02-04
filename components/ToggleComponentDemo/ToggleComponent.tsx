import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ToggleComponent() {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToggleComponent</Text>

      <View style={styles.buttonWrapper}>
        <Button
          title={show ? "Hide Component" : "Show Component"}
          onPress={() => setShow(!show)}
        />
      </View>

      {show ? <AnotherComponent /> : null}
    </View>
  );
}

function AnotherComponent() {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>Another Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // white bg
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  box: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  boxText: {
    fontSize: 16,
    color: "#000",
  },
});
