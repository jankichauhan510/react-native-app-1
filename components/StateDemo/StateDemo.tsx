import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function StateDemo() {
  const [num, setNum] = useState(1);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter App with State</Text>

      <View style={styles.counterBox}>
        <Button title="−" onPress={decrement} color="#e74c3c" />
        <Text style={styles.count}>{num}</Text>
        <Button title="+" onPress={increment} color="#2ecc71" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20, // works in newer RN versions
  },
  count: {
    fontSize: 32,
    fontWeight: "bold",
    minWidth: 50,
    textAlign: "center",
  },
});
