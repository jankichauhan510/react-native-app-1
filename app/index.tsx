import CustomButton from "@/components/CustomButton";
import { View } from "react-native";

const name = "Janki";
const age = 22;
const isLoggedIn = true;

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      {/* <TextComponent /> */}

      {/* <Button
        title="Press ME"
        onPress={() => alert("Button Pressed")}
        color={"green"}
      ></Button> */}
      {/* 
      <Text>Display a variable: {name}</Text>
      <Text>Display numbers: {age}</Text>
      <Text>Use expressions (calculations): {10 + 5}</Text>
      <Text>String concatenation: Hello, {name}!</Text>
      <Text>
        Conditional text (ternary operator) :{" "}
        {isLoggedIn ? "Welcome back!" : "Please log in"}
      </Text> */}

      {/* <ButtonComponent /> */}

      {/* <StateDemo /> */}

      {/* <PropsDemo name="Janki" /> */}

      {/* <StylingDemo /> */}

      {/* <TextInputDemo /> */}

      {/* <FormDemo /> */}

      {/* <FlatListDemo /> */}

      {/* <ListWithMap /> */}

      {/* <GridDemo /> */}

      {/* <SectionListComponent /> */}

      {/* <ClasssComponent /> */}

      {/* <ToggleComponent /> */}

      {/* <ResponsiveLayout /> */}

      <CustomButton />
    </View>
  );
}
