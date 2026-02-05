import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function UseWindowDimensionsHookExample() {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text>useWindowDimensionsHookExample</Text>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
