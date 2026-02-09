import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

const AnimatedMethodsExample = () => {
  // timing → opacity
  const opacityAnim = useRef(new Animated.Value(0)).current;

  // spring → scale
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  // decay → movement
  const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const startAnimations = () => {
    // 1️⃣ timing animation
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // 2️⃣ spring animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 80,
      useNativeDriver: true,
    }).start();

    // 3️⃣ decay animation
    Animated.decay(moveAnim, {
      velocity: { x: 2, y: 2 },
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: opacityAnim, // timing
            transform: [
              { scale: scaleAnim }, // spring
              ...moveAnim.getTranslateTransform(), // decay
            ],
          },
        ]}
      />

      <Button title="Start Animations" onPress={startAnimations} />
    </View>
  );
};

export default AnimatedMethodsExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a3737",
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "tomato",
    marginBottom: 20,
  },
});
