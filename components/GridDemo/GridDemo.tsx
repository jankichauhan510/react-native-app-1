import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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

export default function GridDemo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            margin: 10,
            textDecorationLine: "underline",
          }}
        >
          Grid in React Native
        </Text>

        <View
          style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 3 }}
        >
          {programmingLanguages.map((item) => (
            <Text key={item.id} style={styles.item}>
              {item.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7", // light gray screen bg
    padding: 20,
  },
  item: {
    fontSize: 16,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 6,
    backgroundColor: "#ffffff", // pure white item
    borderRadius: 10,
  },
});
