import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="View Demo of Stack Navigation"
          onPress={() => router.push("/screens/stack-navigation-demo")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "80%",
  },
});
