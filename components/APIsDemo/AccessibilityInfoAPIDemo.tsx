import React, { useEffect, useState } from "react";
import { AccessibilityInfo, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AccessibilityInfoAPIDemo() {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      (isReduceMotionEnabled) => {
        setReduceMotionEnabled(isReduceMotionEnabled);
      },
    );
    const screenReaderChangedSubscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      (isScreenReaderEnabled) => {
        setScreenReaderEnabled(isScreenReaderEnabled);
      },
    );

    AccessibilityInfo.isReduceMotionEnabled().then((isReduceMotionEnabled) => {
      setReduceMotionEnabled(isReduceMotionEnabled);
    });
    AccessibilityInfo.isScreenReaderEnabled().then((isScreenReaderEnabled) => {
      setScreenReaderEnabled(isScreenReaderEnabled);
    });

    return () => {
      reduceMotionChangedSubscription.remove();
      screenReaderChangedSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>React Native Accessibility API Demo</Text>

        <Text style={styles.note}>
          ⚠️ These settings come from your device system settings. This app only
          reads them and does not control them.
        </Text>

        {/* Reduce Motion */}
        <Text style={styles.status}>
          🌀 Reduce Motion: {reduceMotionEnabled ? "ON" : "OFF"}
        </Text>
        <Text style={styles.description}>
          {reduceMotionEnabled
            ? "Animations should be minimized to avoid motion discomfort."
            : "Animations are allowed in the app."}
        </Text>
        <Text style={styles.path}>
          📍 Change path: Settings → Accessibility → Reduce Motion or Remove
          animation
        </Text>

        {/* Screen Reader */}
        <Text style={styles.status}>
          🔊 Screen Reader: {screenReaderEnabled ? "ON" : "OFF"}
        </Text>
        <Text style={styles.description}>
          {screenReaderEnabled
            ? "Screen reader is active. UI should be voice-friendly."
            : "Screen reader is not active."}
        </Text>
        <Text style={styles.path}>
          📍 Change path: Settings → Accessibility → TalkBack / VoiceOver
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 2,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  note: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  status: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  path: {
    fontSize: 12,
    color: "#888",
    marginTop: 6,
    marginBottom: 20,
  },
});
