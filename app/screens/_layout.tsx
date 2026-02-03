import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen name="button-demo" options={{ title: "Button Demo" }} />
      <Stack.Screen name="state-demo" options={{ title: "State Demo" }} />
      <Stack.Screen name="props-demo" options={{ title: "Props Demo" }} />
      <Stack.Screen
        name="textinput-demo"
        options={{ title: "TextInput Demo" }}
      />
      <Stack.Screen name="styling-demo" options={{ title: "Styling Demo" }} />
      <Stack.Screen name="form-demo" options={{ title: "Form Demo" }} />
      <Stack.Screen name="flatlist-demo" options={{ title: "FlatList Demo" }} />
      <Stack.Screen name="list-map-demo" options={{ title: "List With Map" }} />
      <Stack.Screen name="grid-demo" options={{ title: "Grid Demo" }} />
      <Stack.Screen
        name="sectionlist-demo"
        options={{ title: "SectionList Demo" }}
      />
      <Stack.Screen
        name="class-component"
        options={{ title: "Class Component" }}
      />
      <Stack.Screen name="toggle-demo" options={{ title: "Toggle Demo" }} />
      <Stack.Screen
        name="responsive-demo"
        options={{ title: "Responsive Layout" }}
      />
      <Stack.Screen name="radio-demo" options={{ title: "Radio Button" }} />
      <Stack.Screen
        name="custom-button-demo"
        options={{ title: "Custom Button" }}
      />
      <Stack.Screen
        name="activity-indicator-demo"
        options={{ title: "Activity Indicator" }}
      />
      <Stack.Screen name="modal-demo" options={{ title: "Modal Demo" }} />
      <Stack.Screen
        name="pressable-demo"
        options={{ title: "Pressable Demo" }}
      />
      <Stack.Screen
        name="statusbar-demo"
        options={{ title: "StatusBar Demo" }}
      />
      <Stack.Screen name="platform-demo" options={{ title: "Platform Demo" }} />
      <Stack.Screen
        name="webview-demo"
        options={{ title: "View Website in App" }}
      />
      <Stack.Screen
        name="custom-modal-demo"
        options={{ title: "Custom Modal Demo" }}
      />

      <Stack.Screen
        name="navigation-demos"
        options={{ title: "View different types of naviagtion" }}
      />

      <Stack.Screen
        name="fetch-data"
        options={{ title: "Fetch Single data and Display" }}
      />
    </Stack>
  );
}
