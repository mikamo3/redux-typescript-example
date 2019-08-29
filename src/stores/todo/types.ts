import { Action } from "redux";

export interface Todo {
  id: number;
  message: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO"
}

interface AddTodoAction extends Action {
  type: typeof TodoActions.ADD_TODO;
  payload: { message: string };
}
interface UpdateTodoAction extends Action {
  type: typeof TodoActions.UPDATE_TODO;
  payload: { todo: Todo };
}
interface DeleteTodoAction extends Action {
  type: typeof TodoActions.DELETE_TODO;
  payload: { id: number };
}

export type TodoActionTypes =
  | AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction;
