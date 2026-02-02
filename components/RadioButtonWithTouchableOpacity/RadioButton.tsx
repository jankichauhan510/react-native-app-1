import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButton() {
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["JavaScript", "Python", "Java"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Radio button with TouchableOpacity</Text>

      {options.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.radioContainer}
          onPress={() => setSelected(item)}
          activeOpacity={0.6}
        >
          <View style={styles.radioCircle}>
            {selected === item && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6200ee",
    marginBottom: 15,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#6200ee",
  },
  radioText: {
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
