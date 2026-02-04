// import React, { useState } from "react";
// import { StyleSheet, Switch, Text } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// export default function SwitchDemo() {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <Switch
//           trackColor={{ false: "#767577", true: "#81b0ff" }}
//           thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//         />

//         <Text>{isEnabled ? "Enabled" : "Disabled"}</Text>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SwitchDemo() {
  const [isOn, setIsOn] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Bulb */}
        <View
          style={[styles.bulb, { backgroundColor: isOn ? "#FFD700" : "#ccc" }]}
        />

        {/* Bulb Holder */}
        <View style={styles.holder} />

        {/* Switch */}
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isOn ? "#f5dd4b" : "#f4f3f4"}
        />

        {/* Text */}
        <Text style={styles.text}>{isOn ? "Bulb ON 💡" : "Bulb OFF 🔌"}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bulb: {
    width: 120,
    height: 120,
    borderRadius: 60, // circle
    marginBottom: 5,
    elevation: 8, // Android shadow
  },

  holder: {
    width: 50,
    height: 25,
    backgroundColor: "#555",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },

  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});
