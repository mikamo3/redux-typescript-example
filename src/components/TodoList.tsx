import React from "react";
import Todo from "./Todo";
import { types } from "../state/ducks/todo";
import { FlatList } from "react-native";
export interface Props {
  todos: types.Todo[];
  toggleTodo: (id: number) => void;
}
const TodoList: React.FC<Props> = props => (
  <FlatList
    data={props.todos}
    renderItem={({ item }) => (
      <Todo
        text={item.text}
        completed={item.completed}
        onPress={() => {
          props.toggleTodo(item.id);
        }}
      />
    )}
    keyExtractor={item => item.id.toString()}
  />
);
export default TodoList;
