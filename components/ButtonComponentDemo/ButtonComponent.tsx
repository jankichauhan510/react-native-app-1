import { Button, Text, View } from "react-native";

export default function ButtonComponent() {
  const handleButtonPress = () => {
    alert("handleButtonPress Called");
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontSize: 20 }}>Button and onPress Demo</Text>
      <Button title="Press ME" color={"green"} onPress={handleButtonPress} />
    </View>
  );
}
