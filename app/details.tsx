import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Details() {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
