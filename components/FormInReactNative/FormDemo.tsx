import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
        Form Demo
      </Text>

      <TextInput
        placeholder="Enter Name"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>

      <TextInput
        placeholder="Enter Email"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      {/* <TextInput
        placeholder="Enter Password"
        style={styles.textInput}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      ></TextInput> */}

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter Password"
          style={styles.passwordInput}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />

        <Text
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <Button title="Print Data" onPress={() => setDisplay(true)} />
        <Button title="Clear Data" onPress={resetForm} color="#d11a2a" />
      </View>

      <View>
        {display ? (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Name: {name}</Text>
            <Text style={styles.resultText}>Email: {email}</Text>
            <Text style={styles.resultText}>Password: {password}</Text>
          </View>
        ) : (
          <Text style={styles.emptyText}>No value entered</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    justifyContent: "center",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },

  formCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  textInput: {
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fafafa",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  resultBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#e8f0fe",
  },

  resultText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontStyle: "italic",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#333",
  },

  eyeIcon: {
    fontSize: 20,
    paddingHorizontal: 12,
  },
});
