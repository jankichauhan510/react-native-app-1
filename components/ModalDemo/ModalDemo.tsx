import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function ModalDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal (Dialog Box)</Text>

      <Button title="Open Alert" onPress={() => setShowModal(true)} />

      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Are you sure?</Text>
            <Text style={styles.alertMessage}>
              Do you really want to continue?
            </Text>

            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="Cancel"
                  color="#999"
                  onPress={() => setShowModal(false)}
                />
              </View>

              <View style={styles.buttonWrapper}>
                <Button
                  title="OK"
                  onPress={() => {
                    setShowModal(false);
                    alert("Confirmed!");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6200ee",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  alertBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 10,
  },

  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  alertMessage: {
    fontSize: 15,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
