// import { router } from "expo-router";
// import { Button, StyleSheet, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonWrapper}>
//         <Button
//           title="View Demo of Stack Navigation"
//           onPress={() => router.push("/screens/stack-navigation-demo")}
//         />

//         <Button
//           title="View Demo of Drawer Navigation"
//           onPress={() => router.push("/screens/stack-navigation-demo")}
//         />

//         <Button
//           title="View Demo of Tab Navigation"
//           onPress={() => router.push("/screens/stack-navigation-demo")}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f7fa",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonWrapper: {
//     width: "80%",
//   },
// });

import { router } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Navigation Demos</Text>
      <Text style={styles.subHeading}>
        Explore different navigation types in React Native
      </Text>

      <View style={styles.card}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/screens/stack-navigation-demo")}
        >
          <Text style={styles.buttonText}>📚 Stack Navigation</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/(drawer)/inbox")}
        >
          <Text style={styles.buttonText}>📂 Drawer Navigation</Text>
        </Pressable>

        {/* <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/screens/tab-navigation-demo")}
        >
          <Text style={styles.buttonText}>🧭 Tab Navigation</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#1f2937",
  },
  subHeading: {
    fontSize: 14,
    textAlign: "center",
    color: "#6b7280",
    marginTop: 6,
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
