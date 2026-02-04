import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
} from "react-native";

export default function TouchableNativeFeedbackDemo() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableNativeFeedback
      onPress={() => alert("Pressed!")}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      background={TouchableNativeFeedback.Ripple("#fff", false)}
    >
      <Animated.View
        style={[styles.button, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.text}>Press Me</Text>
      </Animated.View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200EE",
    padding: 16,
    borderRadius: 8,
    overflow: "hidden", // IMPORTANT for ripple
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
