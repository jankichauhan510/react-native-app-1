import { View } from "react-native";
import UseColorSchemeHook from "./UseColorSchemeHook";

export default function APIsDemoComponent() {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      {/* <AccessibilityInfoAPIDemo /> */}
      {/* <AlertDemo /> */}
      {/* <AnimatedDemo /> */}

      {/* <AppearanceAPIDemo /> */}

      <UseColorSchemeHook />
    </View>
  );
}
