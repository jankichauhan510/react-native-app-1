import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }: PropsWithChildren) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default ScreenWrapper;
