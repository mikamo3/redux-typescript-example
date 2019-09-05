// eslint-disable-next-line import/named
import { createSelector, Selector } from "reselect";
import { TodoAsyncState, TodoAsync } from "./types";

const selectTodoAsync: Selector<TodoAsyncState, TodoAsync[]> = state => {
  return state.todos;
};

export const getTodoAsync = createSelector(
  selectTodoAsync,
  state => {
    return state;
  }
);
