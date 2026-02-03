import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddData from "./AddData";
import READData from "./READData";

export default function CURDDataJSONServer() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {!showAdd && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowAdd(true)}
        >
          <Text style={styles.addButtonText}>+ Add User</Text>
        </TouchableOpacity>
      )}

      {showAdd ? <AddData onSuccess={() => setShowAdd(false)} /> : <READData />}
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#4f46e5",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-end",
    margin: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
