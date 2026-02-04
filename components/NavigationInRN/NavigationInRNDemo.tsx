import { Href, router } from "expo-router";
import React from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";

type DemoItem = {
  title: string;
  path: Href;
};

const demos: DemoItem[] = [
  { title: "Button Demo", path: "/screens/button-demo" },
  { title: "State Demo", path: "/screens/state-demo" },
  // { title: "Props Demo", path: "/screens/props-demo" },
  { title: "TextInput Demo", path: "/screens/textinput-demo" },
  { title: "Styling Demo", path: "/screens/styling-demo" },
  { title: "Form Demo", path: "/screens/form-demo" },
  { title: "FlatList Demo", path: "/screens/flatlist-demo" },
  { title: "List With Map", path: "/screens/list-map-demo" },
  { title: "Grid Demo", path: "/screens/grid-demo" },
  { title: "SectionList Demo", path: "/screens/sectionlist-demo" },
  { title: "Class Component", path: "/screens/class-component" },
  { title: "Toggle Component", path: "/screens/toggle-demo" },
  { title: "Responsive Layout", path: "/screens/responsive-demo" },
  { title: "Radio Button", path: "/screens/radio-demo" },
  { title: "Custom Button", path: "/screens/custom-button-demo" },
  { title: "Activity Indicator", path: "/screens/activity-indicator-demo" },
  { title: "Modal Demo", path: "/screens/modal-demo" },
  { title: "Pressable Demo", path: "/screens/pressable-demo" },
  { title: "StatusBar Demo", path: "/screens/statusbar-demo" },
  { title: "Platform Demo", path: "/screens/platform-demo" },
  { title: "View Website in App", path: "/screens/webview-demo" },
  { title: "Custom Modal Demo", path: "/screens/custom-modal-demo" },
  { title: "Drawer Layout Android", path: "/screens/drawer-layout-android" },
  { title: "Image Background", path: "/screens/image-background" },
  { title: "Image Component", path: "/screens/image-component" },
  { title: "Keyboard Avoiding View", path: "/screens/keyboard-avoiding" },
  { title: "Ref in React Native", path: "/screens/ref-in-react-native" },
  { title: "Refresh Control", path: "/screens/refresh-control" },
  { title: "ScrollView", path: "/screens/scroll-view" },
  { title: "Switch", path: "/screens/switch-scree" },
  {
    title: "Touchable Native Feedback Demo",
    path: "/screens/touchable-native-feedback-demo",
  },
  {
    title: "Touchable Without Feedback",
    path: "/screens/touchable-without-feedback",
  },
  { title: "Virtualized List", path: "/screens/virtualized-list" },
];

export default function NavigationInRNDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        {demos.map((item) => (
          <View key={String(item.path)} style={styles.buttonWrapper}>
            <Button title={item.title} onPress={() => router.push(item.path)} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    gap: 12,
  },
  buttonWrapper: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    overflow: "hidden",
  },
});
