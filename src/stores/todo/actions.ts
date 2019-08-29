import { TodoActions, Todo } from "./types";

export function addTodo(message: string) {
  return {
    type: TodoActions.ADD_TODO,
    payload: { message }
  };
}

export function updateTodo(todo: Todo) {
  return {
    type: TodoActions.UPDATE_TODO,
    payload: { todo }
  };
}

export function deleteTodo(id: number) {
  return {
    type: TodoActions.DELETE_TODO,
    payload: { id }
  };
}

export default {
  addTodo,
  updateTodo,
  deleteTodo
};
