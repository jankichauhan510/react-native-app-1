import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { ComponentProps } from "react";

const activeColor = "#16a34a";
const inactiveColor = "#6b7280";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

const drawerItems: {
  name: string;
  title: string;
  icon: IoniconName;
}[] = [
  { name: "inbox", title: "Inbox", icon: "mail" },
  { name: "starred", title: "Starred", icon: "star" },
  { name: "snoozed", title: "Snoozed", icon: "time" },
  { name: "sent", title: "Sent", icon: "send" },
  { name: "drafts", title: "Drafts", icon: "document" },
  { name: "purchases", title: "Purchases", icon: "cart" },
  { name: "travel", title: "Travel", icon: "airplane" },
  { name: "important", title: "Important", icon: "alert" },
  { name: "scheduled", title: "Scheduled", icon: "calendar" },
  { name: "all-mail", title: "All Mail", icon: "archive" },
  { name: "spam", title: "Spam", icon: "warning" },
  { name: "trash", title: "Trash", icon: "trash" },
  { name: "manage-subscriptions", title: "Manage Subscriptions", icon: "list" },
  { name: "manage-labels", title: "Manage Labels", icon: "pricetags" },
  { name: "create-new-label", title: "Create New Label", icon: "add-circle" },
];

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#4f46e5" },
        headerTintColor: "#fff",
        drawerActiveTintColor: activeColor,
        drawerInactiveTintColor: inactiveColor,
      }}
    >
      {drawerItems.map(({ name, title, icon }) => (
        <Drawer.Screen
          key={name}
          name={name}
          options={{
            title,
            drawerIcon: ({ focused }) => (
              <Ionicons
                name={focused ? icon : (`${icon}-outline` as IoniconName)}
                size={26}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />
      ))}
    </Drawer>
  );
}
