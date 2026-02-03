import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddDataModal from "./AddDataModal";
import READData from "./READData";

export default function CRUDWithJsonServer() {
  const [showAdd, setShowAdd] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <View style={styles.container}>
      {/* READ data */}
      <READData refreshKey={refreshKey} />

      {/* FLOATING + BUTTON */}
      <TouchableOpacity style={styles.fab} onPress={() => setShowAdd(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* ADD DATA SCREEN */}
      {showAdd && (
        <AddDataModal
          onSuccess={() => {
            setShowAdd(false);
            setRefreshKey((prev) => prev + 1);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /*  Search */
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
  },

  /* Card */
  card: {
    backgroundColor: "#f1f5f9",
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    color: "#64748b",
    marginTop: 4,
  },

  /* Floating Button */
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#4f46e5",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  fabText: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 36,
  },
});
