import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const programmingLanguages = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "Python" },
  { id: "3", name: "Java" },
  { id: "4", name: "C" },
  { id: "5", name: "C++" },
  { id: "6", name: "C#" },
  { id: "7", name: "TypeScript" },
  { id: "8", name: "Go" },
  { id: "9", name: "Kotlin" },
  { id: "10", name: "Swift" },
  { id: "11", name: "PHP" },
  { id: "12", name: "Ruby" },
  { id: "13", name: "Rust" },
  { id: "14", name: "Dart" },
  { id: "15", name: "R" },
  { id: "16", name: "Scala" },
  { id: "17", name: "Perl" },
  { id: "18", name: "Objective-C" },
  { id: "19", name: "Haskell" },
  { id: "20", name: "Lua" },
  { id: "21", name: "Shell Script" },
  { id: "22", name: "Groovy" },
  { id: "23", name: "Visual Basic .NET" },
  { id: "24", name: "Assembly" },
  { id: "25", name: "MATLAB" },
  { id: "26", name: "Julia" },
  { id: "27", name: "COBOL" },
  { id: "28", name: "Fortran" },
  { id: "29", name: "Scratch" },
  { id: "30", name: "Solidity" },
];

export default function FlatListDemo() {
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          margin: 10,
          textDecorationLine: "underline",
        }}
      >
        List with Flatlist Component
      </Text>

      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      ></FlatList>
    </View>
  );
}

// for show header of flatlist
//   ListHeaderComponent={() => (
//       <View style={{ padding: 16, backgroundColor: "#f2f2f2" }}>
//         <Text style={{ fontSize: 15, fontWeight: "bold" }}>
//           Programming Language List (with prop ListHeaderComponent)
//         </Text>
//       </View>
//     )}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },

  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
