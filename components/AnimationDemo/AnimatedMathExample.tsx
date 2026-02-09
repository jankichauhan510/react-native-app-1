import React, { useRef } from "react";
import { Animated, Button, ScrollView, StyleSheet, Text } from "react-native";

const AnimatedMathExample = () => {
  const base = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  // Combine animated values
  const addValue = Animated.add(base, 50);
  const subtractValue = Animated.subtract(base, 50);
  const multiplyValue = Animated.multiply(base, 1.5);
  const divideValue = Animated.divide(base, 2);
  const moduloValue = Animated.modulo(base, 100);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(base, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();

    Animated.spring(scale, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView>
      {/* ADD */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: addValue }] }]}
      />
      <Text>Add (+50)</Text>

      {/* SUBTRACT */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: subtractValue }] }]}
      />
      <Text>Subtract (-50)</Text>

      {/* MULTIPLY */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: multiplyValue }] }]}
      />
      <Text>Multiply (×1.5)</Text>

      {/* DIVIDE */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: divideValue }] }]}
      />
      <Text>Divide (÷2)</Text>

      {/* MODULO */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: moduloValue }] }]}
      />
      <Text>Modulo (%100)</Text>

      <Button title="Start Animation" onPress={startAnimation} />
    </ScrollView>
  );
};

export default AnimatedMathExample;

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    backgroundColor: "purple",
    marginVertical: 6,
  },
});
