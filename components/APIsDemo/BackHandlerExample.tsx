import React, { useEffect } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";

export default function BackHandlerExample() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Do you want to exit the app?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Back Button Demo</Text>
      <Text style={styles.info}>
        Press the Android back button to exit the app.
      </Text>
      <Text style={styles.subInfo}>
        A confirmation popup will appear before closing.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: "center",
  },
  subInfo: {
    marginTop: 6,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
