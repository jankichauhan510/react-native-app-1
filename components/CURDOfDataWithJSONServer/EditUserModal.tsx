import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Post = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  visible: boolean;
  user: Post | null;
  name: string;
  email: string;
  onChangeName: (text: string) => void;
  onChangeEmail: (text: string) => void;
  onClose: () => void;
  onSave: () => void;
};

export default function EditUserModal({
  visible,
  user,
  name,
  email,
  onChangeName,
  onChangeEmail,
  onClose,
  onSave,
}: Props) {
  if (!user) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Edit User</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={onChangeName}
            placeholder="Name"
          />

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            keyboardType="email-address"
          />

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.btn, styles.cancel]}
              onPress={onClose}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, styles.save]}
              onPress={onSave}
            >
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 10,
  },

  cancel: {
    backgroundColor: "#9ca3af",
  },

  save: {
    backgroundColor: "#4f46e5",
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
