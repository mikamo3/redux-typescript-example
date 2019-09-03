import React from "react";
import { Text } from "react-native";
interface Props {
  completed: boolean;
  text: string;
  onPress: () => void;
}

const Todo: React.FC<Props> = ({ completed, text, onPress }) => (
  <Text
    style={{ textDecorationLine: completed ? "line-through" : "none" }}
    onPress={onPress}
  >
    {text}
  </Text>
);
export default Todo;
