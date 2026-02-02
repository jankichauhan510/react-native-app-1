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
  { title: "Props Demo", path: "/screens/props-demo" },
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
];

export default function NavigationInRNDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 40 }}>
      <View style={{ gap: 12 }}>
        {demos.map((item) => (
          <Button title={item.title} onPress={() => router.push(item.path)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
