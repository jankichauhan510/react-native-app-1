// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   Button,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// export default function ActivityIndicatorComponent() {
//   const [showLoader, setShowLoader] = useState(true);
//   return (
//     <View>
//       <Text style={styles.title}>Activity Indicator (Loader)</Text>

//       <Button
//         title={showLoader ? "Hide Loader" : "Show loader"}
//         onPress={() => {
//           setShowLoader(!showLoader);
//         }}
//       ></Button>

//       {showLoader ? <ActivityIndicator size={100} color={"red"} /> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#6200ee",
//     marginTop: 15,
//     marginBottom: 10,
//     textAlign: "center",
//     letterSpacing: 1,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
// });

import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function ActivityIndicatorComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // fake API call
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <Text>Data Loaded ✅</Text>
      )}
    </View>
  );
}
