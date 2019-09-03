import React from "react";
import { View, TextInput, Button } from "react-native";
export interface Props {
  onPressAdd: (text: string) => void;
}
export default class TodoInputForm extends React.Component<Props> {
  state = {
    text: ""
  };
  onChangeText = (text: string) => {
    this.setState({ text: text });
  };
  onPressAdd = () => {
    this.props.onPressAdd(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 45,
            width: "95%",
            borderColor: "gray",
            borderWidth: 2
          }}
          value={this.state.text}
          onChangeText={this.onChangeText}
        />
        <Button title="追加" onPress={this.onPressAdd} />
      </View>
    );
  }
}
