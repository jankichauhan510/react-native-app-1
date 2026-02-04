import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageComponentDemo() {
  return (
    <View style={styles.container}>
      {/* LOCAL IMAGE CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Local Image</Text>
        <Image
          source={require("../../assets/images/image.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* REMOTE IMAGE CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Remote Image</Text>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1712418420146-6ea99872ef45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzl8fHxlbnwwfHx8fHw%3D",
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    // shadow for Android
    elevation: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 14,
  },
});
