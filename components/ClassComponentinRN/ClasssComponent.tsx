import { Component, ReactNode } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PassingProps from "./PassingProps";

interface State {
  name: string;
}

class ClasssComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleButtonPress = () => {
    alert(`Hello ${this.state.name}`);
  };

  updateName = (val: string) => {
    this.setState({ name: val });
  };

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Class COmponent Demo</Text>

        {/* <Text>Name: {this.state.name}</Text>
        <Text>Age: {this.state.age}</Text> */}

        <TextInput
          placeholder="Enter Your name"
          style={styles.textInput}
          value={this.state.name}
          onChangeText={(text) => this.updateName(text)}
        ></TextInput>

        {/* <Button title="press me" onPress={this.handleButtonPress}></Button> */}

        <PassingProps name={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  textInput: {
    fontSize: 15,
    color: "gray",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});

export default ClasssComponent;
