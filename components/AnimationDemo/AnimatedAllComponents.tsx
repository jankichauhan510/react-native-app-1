import React, { useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AnimatedAllComponents = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Data for FlatList
  const flatListData = ["Apple", "Banana", "Orange", "Mango"];

  // Data for SectionList
  const sectionListData = [
    {
      title: "Fruits",
      data: ["Apple", "Banana"],
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Potato"],
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        {/* 1️⃣ Animated.View */}
        <Animated.View
          style={[
            styles.box,
            {
              opacity: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [1, 0],
              }),
            },
          ]}
        />

        {/* 2️⃣ Animated.Text */}
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [
                {
                  scale: scrollY.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
            },
          ]}
        >
          Animated Text
        </Animated.Text>

        {/* 3️⃣ Animated.Image */}
        <Animated.Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={[
            styles.image,
            {
              transform: [
                {
                  rotate: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
        />

        {/* 4️⃣ Animated.FlatList */}
        <Text style={styles.heading}>Animated FlatList</Text>
        <Animated.FlatList
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />

        {/* 5️⃣ Animated.SectionList */}
        <Text style={styles.heading}>Animated SectionList</Text>
        <Animated.SectionList
          sections={sectionListData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </Animated.ScrollView>
    </ScrollView>
  );
};

export default AnimatedAllComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#eee",
    padding: 5,
  },
});
