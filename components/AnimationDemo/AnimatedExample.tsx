import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

const AnimatedExample = () => {
  // 1️⃣ Single value animation (opacity)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 2️⃣ XY animation (move box)
  const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const startAnimation = () => {
    Animated.parallel([
      // Animate opacity
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      // Animate position (x & y)
      Animated.timing(moveAnim, {
        toValue: { x: 150, y: 200 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Animated Box */}
      <Animated.View
        style={[
          styles.box,
          {
            opacity: fadeAnim, // Animated.Value()
            transform: moveAnim.getTranslateTransform(), // Animated.ValueXY()
          },
        ]}
      />

      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

export default AnimatedExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "tomato",
    marginBottom: 20,
  },
});
