import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddData from "./AddData";
import READData from "./READData";

export default function CURDDataJSONServer() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAdd(true)}
      >
        <Text style={styles.addButtonText}>+ Add User</Text>
      </TouchableOpacity>

      {/* Component toggle */}
      {showAdd ? <AddData /> : <READData />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  addButton: {
    backgroundColor: "#4f46e5", // indigo
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginBottom: 10,
    elevation: 3, // Android shadow
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
