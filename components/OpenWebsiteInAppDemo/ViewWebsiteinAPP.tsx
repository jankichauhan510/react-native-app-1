import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ViewWebsiteinAPP() {
  return (
    <WebView source={{ uri: "https://reactnative.dev/" }} style={{ flex: 1 }} />
  );
}

const styles = StyleSheet.create({});
