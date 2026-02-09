import React, { JSX, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 🔹 Import demo components
import AnimationDemo from "../AnimationDemo/AnimationDemo";
import AccessibilityInfoAPIDemo from "./AccessibilityInfoAPIDemo";
import AlertDemo from "./AlertDemo";
import AppearanceAPIDemo from "./AppearanceAPIDemo";
import AppStateAPIDemo from "./AppStateAPIDemo";
import BackHandlerExample from "./BackHandlerExample";
import EasingAPIDemo from "./EasingAPIDemo";
import KeyboardAPIDemo from "./KeyboardAPIDemo";
import LayoutAnimationAPIDemo from "./LayoutAnimationAPIDemo";
import LinkingAPIDemo from "./LinkingAPIDemo";
import PermissionsAndroidDemo from "./PermissionsAndroidDemo";
import ShareExample from "./ShareAPIDemo";
import ToastExampleApp from "./ToastExampleApp";
import TransformsAPIDemo from "./TransformsAPIDemo";
import UseColorSchemeHook from "./UseColorSchemeHook";
import UseWindowDimensionsHookExample from "./useWindowDimensionsHookExample";
import VibrationAPIDemo from "./VibrationAPIDemo";

type ApiItem = {
  title: string;
  description: string;
  component: JSX.Element;
};

export default function APIsDemoComponent() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  // 🔹 All APIs config in ONE place
  const APIS: Record<string, ApiItem> = {
    AccessibilityInfo: {
      title: "AccessibilityInfo API",
      description:
        "Used to check screen reader status and improve accessibility for disabled users.",
      component: <AccessibilityInfoAPIDemo />,
    },
    Alert: {
      title: "Alert API",
      description:
        "Shows native alert popups with buttons for user interaction.",
      component: <AlertDemo />,
    },
    Appearance: {
      title: "Appearance API",
      description:
        "Detects system theme (light or dark mode) and reacts to changes.",
      component: <AppearanceAPIDemo />,
    },
    ColorScheme: {
      title: "useColorScheme Hook",
      description: "Hook to get current color scheme and build theme-aware UI.",
      component: <UseColorSchemeHook />,
    },
    AppState: {
      title: "AppState API",
      description:
        "Detects whether the app is active, backgrounded, or inactive.",
      component: <AppStateAPIDemo />,
    },
    Easing: {
      title: "Easing API",
      description:
        "Controls animation speed and motion curve (ease, bounce, linear).",
      component: <EasingAPIDemo />,
    },
    Keyboard: {
      title: "Keyboard API",
      description:
        "Listens to keyboard open/close events and adjusts UI accordingly.",
      component: <KeyboardAPIDemo />,
    },
    LayoutAnimation: {
      title: "LayoutAnimation API",
      description:
        "Animates layout changes like height, width, or position automatically.",
      component: <LayoutAnimationAPIDemo />,
    },
    Linking: {
      title: "Linking API",
      description: "Opens URLs, deep links, emails, phone calls from the app.",
      component: <LinkingAPIDemo />,
    },
    Share: {
      title: "Share API",
      description:
        "Opens native share dialog to share text or links with other apps.",
      component: <ShareExample />,
    },
    Transforms: {
      title: "Transform Style API",
      description:
        "Applies rotation, scaling, skewing, and translation to views.",
      component: <TransformsAPIDemo />,
    },
    Vibration: {
      title: "Vibration API",
      description: "Triggers vibration patterns on the device.",
      component: <VibrationAPIDemo />,
    },
    Toast: {
      title: "Toast API (Android)",
      description: "Shows short popup messages at the bottom of the screen.",
      component: <ToastExampleApp />,
    },
    PermissionsAndroid: {
      title: "PermissionsAndroid API",
      description:
        "Requests runtime permissions like camera, location, storage.",
      component: <PermissionsAndroidDemo />,
    },
    BackHandler: {
      title: "BackHandler API",
      description: "Handles Android hardware back button behavior.",
      component: <BackHandlerExample />,
    },
    WindowDimensions: {
      title: "useWindowDimensions Hook",
      description: "Gets live screen width and height and updates on rotation.",
      component: <UseWindowDimensionsHookExample />,
    },
    Animations: {
      title: "Animations API",
      description:
        "Built-in animation tools for creating smooth and interactive UIs.",
      component: <AnimationDemo />,
    },
  };

  // 🔹 Demo Screen
  if (selectedKey) {
    const api = APIS[selectedKey];

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedKey(null)}
        >
          <Text style={styles.backText}>⬅ Back to APIs</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{api.title}</Text>
        <Text style={styles.description}>{api.description}</Text>

        <View style={styles.demoBox}>{api.component}</View>
      </View>
    );
  }

  // 🔹 API List Screen
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>React Native API Playground</Text>

      {Object.keys(APIS).map((key) => (
        <TouchableOpacity
          key={key}
          style={styles.button}
          onPress={() => setSelectedKey(key)}
        >
          <Text style={styles.buttonText}>{APIS[key].title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  demoBox: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#1976D2",
    padding: 14,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  backButton: {
    padding: 8,
    marginBottom: 8,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1976D2",
  },
});
