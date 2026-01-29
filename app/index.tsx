import { View } from "react-native";
import TextComponent from "./TextComponentDemo/TextComponent";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      <TextComponent />
    </View>
  );
}
