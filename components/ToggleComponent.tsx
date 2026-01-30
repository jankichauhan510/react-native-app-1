import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ToggleComponent() {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      <Text>ToggleComponent</Text>

      <Button
        title={show ? "Hide Component" : "Show Component"}
        onPress={() => setShow(!show)}
      ></Button>

      {show ? <AnotherComponent /> : null}
    </View>
  );
}

function AnotherComponent() {
  return (
    <View>
      <Text>Another Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
