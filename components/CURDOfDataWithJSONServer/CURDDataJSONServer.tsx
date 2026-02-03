import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CURDDataJSONServer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    let valid = true;
    let newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email (example: name@gmail.com)";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const saveData = async () => {
    if (!validate()) return;

    const data = { name, email };

    const url = "http://10.17.167.128:3000/users";

    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await result.json();
      if (response) {
        alert("✅ Data saved successfully");
        setName("");
        setEmail("");
        setErrors({});
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>

      {/* Name */}
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#9ca3af"
        style={[styles.input, errors.name && styles.inputError]}
        value={name}
        onChangeText={(text) => {
          setName(text);
          if (errors.name) setErrors({ ...errors, name: undefined });
        }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      {/* Email */}
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#9ca3af"
        style={[styles.input, errors.email && styles.inputError]}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors({ ...errors, email: undefined });
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 5,
  },

  inputError: {
    borderColor: "#ef4444",
  },

  errorText: {
    color: "#ef4444",
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 4,
  },

  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
