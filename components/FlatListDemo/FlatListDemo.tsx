import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// import LanguageItem from "./LanguageItem";

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

      {/* renderItem with internal component */}
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => <LanguageItem name={item.name} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      ></FlatList>
      {/* 
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => <LanguageItem name={item.name} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      ></FlatList> */}

      {/* renderItem with inside
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              name={getIconName(item.name)}
              size={26}
              color="#4a90e2"
              style={{ marginRight: 12 }}
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      ></FlatList> */}
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

export const getIconName = (language: any) => {
  switch (language) {
    case "JavaScript":
      return "language-javascript";
    case "Python":
      return "language-python";
    case "Java":
      return "language-java";
    case "C":
      return "language-c";
    case "C++":
      return "language-cpp";
    case "C#":
      return "language-csharp";
    case "TypeScript":
      return "language-typescript";
    case "Go":
      return "language-go";
    case "Kotlin":
      return "language-kotlin";
    case "Swift":
      return "language-swift";
    case "PHP":
      return "language-php";
    case "Ruby":
      return "language-ruby";
    case "Rust":
      return "language-rust";

    default:
      return "code-tags";
  }
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});

type LanguageItemProps = {
  name: string;
};

const LanguageItem = ({ name }: LanguageItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons
        name={getIconName(name)}
        size={26}
        color="#4a90e2"
        style={{ marginRight: 12 }}
      />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};
