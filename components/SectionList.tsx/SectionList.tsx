// const contacts = [
//   {
//     title: "A",
//     data: ["Anil", "Amit", "Akash"],
//   },
//   {
//     title: "B",
//     data: ["Bharat", "Bhavesh"],
//   },
//   {
//     title: "C",
//     data: ["Chirag", "Chetan"],
//   },
//   {
//     title: "D",
//     data: ["Dhirag", "Dhetan"],
//   },
// ];

// export default function SectionListComponent() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text
//         style={{
//           fontSize: 22,
//           fontWeight: "bold",
//           margin: 10,
//           textDecorationLine: "underline",
//         }}
//       >
//         Section List in React Native
//       </Text>

//       <View style={styles.container}>
//         <SectionList
//           sections={contacts}
//           keyExtractor={(item, index) => item + index}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text style={styles.name}>{item}</Text>
//             </View>
//           )}
//           renderSectionHeader={({ section: { title } }) => (
//             <View style={styles.header}>
//               <Text style={styles.headerText}>{title}</Text>
//             </View>
//           )}
//           stickySectionHeadersEnabled
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f2f2",
//   },
//   header: {
//     backgroundColor: "#e6e6e6",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#555",
//   },
//   item: {
//     backgroundColor: "#fff",
//     padding: 14,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#ddd",
//   },
//   name: {
//     fontSize: 16,
//   },
// });

import { SectionList, StyleSheet, Text, View } from "react-native";

type Section = {
  title: string;
  data: string[];
};

const names = [
  // A
  "Anil",
  "Amit",
  "Akash",
  "Ananya",

  // B
  "Bharat",
  "Bhavesh",

  // C
  "Chirag",
  "Chetan",

  // D
  "Deepak",

  // E
  "Esha",

  // F
  "Farhan",

  // G
  "Gaurav",

  // H
  "Harsh",

  // I
  "Ishaan",

  // J
  "Jay",
  "Jignesh",

  // K
  "Karan",

  // L
  "Lokesh",

  // M
  "Manish",

  // N
  "Nikhil",

  // O
  "Om",

  // P
  "Pratik",

  // R
  "Rahul",

  // S
  "Sunil",
  "Sachin",
  "Suresh",

  // T
  "Tushar",

  // V
  "Vikas",

  // Y
  "Yash",
];

const groupedData: Section[] = Object.values(
  names.reduce<Record<string, Section>>((acc, name) => {
    const letter = name[0].toUpperCase();
    acc[letter] ??= { title: letter, data: [] };
    acc[letter].data.push(name);
    return acc;
  }, {}),
).sort((a, b) => a.title.localeCompare(b.title));

export default function SectionListComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Text style={styles.title}>Section List in React Native</Text>

      <SectionList
        sections={groupedData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    textDecorationLine: "underline",
  },
  header: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  item: {
    backgroundColor: "#fff",
    padding: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 16,
  },
});
