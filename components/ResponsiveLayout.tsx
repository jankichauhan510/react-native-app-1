import React from "react";
import { View } from "react-native";

export default function ResponsiveLayout() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: "orange", flex: 2, flexDirection: "row" }}
      >
        <View style={{ backgroundColor: "pink", flex: 1 }}></View>
        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
      </View>
      <View style={{ backgroundColor: "purple", flex: 1 }}></View>
      <View style={{ backgroundColor: "green", flex: 1 }}></View>
    </View>
  );
}
