import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { textStyles } from "./Style";

export default function StylingDemo() {
  return (
    <View>
      <Text>Style in ReactNative</Text>

      <Text style={{ fontSize: 30, color: "blue" }}>Inline Style</Text>

      <Text style={styles.text}>Internal Style</Text>

      <Text style={textStyles.title}>External Style</Text>

      <Text style={[textStyles.title, styles.text]}>
        Internal + Externla Style
      </Text>

      <Text style={[textStyles.title, { color: "blue" }]}>
        External + Inline style
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "center",
    textAlign: "center",
    borderColor: "red",
    borderWidth: 1,
    marginTop: 10,
  },
});
