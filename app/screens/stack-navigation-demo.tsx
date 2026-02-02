import NavigationInRNDemo from "@/components/NavigationInRN/NavigationInRNDemo";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function StackDemo() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "View Stack Demo",
          headerStyle: { backgroundColor: "#4f46e5" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />
      <NavigationInRNDemo />
    </>
  );
}

const styles = StyleSheet.create({});
