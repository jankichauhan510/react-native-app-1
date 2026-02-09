import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

const AnimatedInterpolateExample = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(scrollX, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  // Interpolations
  const opacity = scrollX.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
  });

  const scale = scrollX.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 2],
  });

  const rotate = scrollX.interpolate({
    inputRange: [0, 200],
    outputRange: ["0deg", "360deg"],
  });

  const translateX = scrollX.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 150],
  });

  const backgroundColor = scrollX.interpolate({
    inputRange: [0, 200],
    outputRange: ["rgb(255,99,71)", "rgb(65,105,225)"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity, // fade
            backgroundColor, // color change
            transform: [
              { scale }, // zoom
              { rotate }, // rotate
              { translateX }, // move
            ],
          },
        ]}
      />

      <Button title="Start Interpolation" onPress={startAnimation} />
    </View>
  );
};

export default AnimatedInterpolateExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
  },
});
