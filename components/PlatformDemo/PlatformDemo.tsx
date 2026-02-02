import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function PlatformDemo() {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Platform Demo</Text>

      <Text style={styles.textStyle}>{Platform.OS}</Text>

      <Text style={styles.textStyle}>{JSON.stringify(Platform)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});
