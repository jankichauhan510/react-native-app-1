import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Welcome to the React Native App
      </Text>
    </View>
  );
}
