import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const AnimatedEventExample = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolations based on scroll
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [120, 60],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Animated Header */}
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            opacity: headerOpacity,
          },
        ]}
      >
        <Text style={styles.headerText}>Animated.event()</Text>
      </Animated.View>

      {/* Animated ScrollView */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 130 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <View key={i} style={styles.item}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default AnimatedEventExample;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    height: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
