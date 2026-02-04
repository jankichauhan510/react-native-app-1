import { Button, StyleSheet, Text, View } from "react-native";

export default function ButtonComponent() {
  const handleButtonPress = () => {
    alert("handleButtonPress Called");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Button and onPress Demo</Text>

      <Text style={styles.description}>
        This example shows how to use a Button component and handle its onPress
        event in React Native.
      </Text>

      <View style={styles.buttonWrapper}>
        <Button title="Press Me" color="green" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});
