import { Dispatch } from "redux";
import actions from "./actions";
import { Todo } from "./types";

const addTodo = (message: string) => (dispatch: Dispatch) => {
  return dispatch(actions.addTodo(message));
};

const updateTodo = (todo: Todo) => (dispatch: Dispatch) => {
  return dispatch(actions.updateTodo(todo));
};

const deleteTodo = (id: number) => (dispatch: Dispatch) => {
  return dispatch(actions.deleteTodo(id));
};
export default {
  addTodo,
  updateTodo,
  deleteTodo
};
