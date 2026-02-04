import React from "react";
import { ImageBackground, Text, View } from "react-native";

export default function ImageBackgroundDemo() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg-image.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Image Background Demo
        </Text>
      </ImageBackground>
    </View>
  );
}
