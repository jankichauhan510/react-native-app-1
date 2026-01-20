import { useColorScheme } from "@/hooks/use-color-scheme";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // "dark" | "light"

  const textColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const backgroundColor = colorScheme === "dark" ? "#000000" : "#FFFFFF";

  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: textColor,
          }}
        >
          Hello World
        </Text>
      </View>
    </>
  );
}
