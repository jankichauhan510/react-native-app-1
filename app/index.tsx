import ScreenWrapper from "@/components/ScreenWrapper";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // "dark" | "light"

  const textColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <>
      <ScreenWrapper>
        <Text style={{ color: textColor }}>Hello Home</Text>
      </ScreenWrapper>
    </>
  );
}
