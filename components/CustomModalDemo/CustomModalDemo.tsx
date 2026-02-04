import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomModalDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Open button */}
      <Pressable style={styles.openBtn} onPress={() => setVisible(true)}>
        <Text style={styles.btnText}>Open Custom Modal</Text>
      </Pressable>

      {/* Custom Modal */}
      {visible && (
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.title}>Custom Modal</Text>
            <Text>This modal is made without Modal component 🚀</Text>

            <Pressable
              style={styles.closeBtn}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  openBtn: {
    backgroundColor: "#6200ee",
    padding: 12,
    borderRadius: 8,
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  closeBtn: {
    marginTop: 15,
    backgroundColor: "#03dac6",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
