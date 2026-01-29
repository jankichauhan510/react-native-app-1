import React from "react";
import { Text, View } from "react-native";

// export default function PropsDemo(props: any) {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Props Demo</Text>
//       <Text>Passed Props: {props.name}</Text>
//     </View>
//   );
// }

// destructuring props
type Props = {
  name: string;
};

export default function PropsDemo({ name }: Props) {
  return (
    <View>
      <Text>passed from the parent: {name}</Text>
    </View>
  );
}
