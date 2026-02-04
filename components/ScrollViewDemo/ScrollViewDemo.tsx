import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ScrollViewDemo() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
        edges={["top"]}
      >
        <ScrollView style={{ backgroundColor: "pink" }}>
          <Text style={{ fontSize: 42, padding: 12 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
