import React from "react";
import Todo from "./Todo";
import { types } from "../state/ducks/todo";
import { FlatList } from "react-native";
export interface StateProps {
  todos: types.Todo[];
}
export interface DispatchProps {
  toggleTodo: (id: string) => void;
}
type Props = StateProps & DispatchProps;
const TodoList: React.FC<Props> = props => (
  <FlatList
    data={props.todos}
    renderItem={({ item }) => (
      <Todo
        key={item.id}
        onPress={() => {
          props.toggleTodo(item.id);
        }}
        todo={item}
      />
    )}
  />
);
export default TodoList;
