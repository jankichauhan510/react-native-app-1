import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TouchableWithoutFeedbackDemo() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}
      >
        <View style={{ alignItems: "center", padding: 10 }}>
          <Text style={{ color: "#FF00FF" }}>Count: {count}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#DDDDDD",
              padding: 10,
            }}
          >
            <Text>Touch Here</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
