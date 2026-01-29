import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Text with style....
      </Text>

      <Text>
        Text with <Text style={{ fontWeight: "bold" }}>Nexted Text</Text>
      </Text>

      <Text onPress={() => alert("Text clicked!")}>
        click on me show alert (Text with Click / Touch)
      </Text>

      <Text numberOfLines={2} ellipsizeMode="tail">
        <Text style={{ fontWeight: "bold" }}>
          this is example for not show multiple instead of show one line and
          remaining with...
        </Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iusto
        dolorum fuga officia vel pariatur aut, optio quibusdam? Nam explicabo
        nulla veritatis excepturi! Nostrum suscipit exercitationem enim veniam!
        Veritatis, ullam!
      </Text>
    </View>
  );
}
