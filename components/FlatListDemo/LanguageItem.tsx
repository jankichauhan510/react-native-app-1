import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { getIconName } from "./FlatListDemo";

type Props = {
  name: string;
};

export default function LanguageItem({ name }: Props) {
  return (
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons
        name={getIconName(name)}
        size={26}
        color="#4a90e2"
        style={{ marginRight: 12 }}
      />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
