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

export default function ListWithMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List with map function</Text>

      <ScrollView>
        {programmingLanguages.map((item) => (
          <Text key={item.id} style={styles.item}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
