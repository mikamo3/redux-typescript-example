import React from "react";
import { types } from "../state/ducks/todo";
import { Text } from "react-native";

interface Props {
  todo: types.Todo;
  onPress: () => void;
}

const Todo: React.FC<Props> = ({ todo, onPress }) => (
  <Text
    style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
    onPress={onPress}
  >
    {todo.text}
  </Text>
);
export default Todo;
