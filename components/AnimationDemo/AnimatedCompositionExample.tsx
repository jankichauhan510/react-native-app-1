import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

const AnimatedCompositionExample = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  const box1 = useRef(new Animated.Value(0)).current;
  const box2 = useRef(new Animated.Value(0)).current;
  const box3 = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      // 1️⃣ Delay before starting
      Animated.delay(500),

      // 2️⃣ Run animations at the same time
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),

      // 3️⃣ One after another
      Animated.sequence([
        Animated.timing(box1, {
          toValue: 150,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(box2, {
          toValue: 150,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(box3, {
          toValue: 150,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // 4️⃣ Staggered animation
      Animated.stagger(200, [
        Animated.timing(box1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(box2, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(box3, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Main animated box */}
      <Animated.View
        style={[
          styles.mainBox,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      />

      {/* Stagger boxes */}
      <View style={styles.row}>
        <Animated.View
          style={[styles.smallBox, { transform: [{ translateX: box1 }] }]}
        />
        <Animated.View
          style={[styles.smallBox, { transform: [{ translateX: box2 }] }]}
        />
        <Animated.View
          style={[styles.smallBox, { transform: [{ translateX: box3 }] }]}
        />
      </View>

      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

export default AnimatedCompositionExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  smallBox: {
    width: 40,
    height: 40,
    backgroundColor: "dodgerblue",
    marginHorizontal: 5,
  },
});
