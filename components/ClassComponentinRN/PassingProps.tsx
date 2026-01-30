import React, { Component } from "react";
import { Text, View } from "react-native";

interface PassingPropsProps {
  name: string;
}

class PassingProps extends Component<PassingPropsProps> {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Another class component</Text>

        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default PassingProps;
