import { createSelector, Selector } from "reselect";
import { TodoState, VisibilityFilterTypes, Todo } from "./types";

const selectTodos: Selector<TodoState, Todo[]> = state => {
  return state.todos;
};
const visibilityFilterSelector = (state: TodoState) => state.filter;
const todoSelector = (state: TodoState) => state.todos;

export const getTodos = createSelector(
  selectTodos,
  state => {
    return state;
  }
);
export const getVisibleTodos = createSelector(
  [visibilityFilterSelector, todoSelector],
  (visibilityFilterSelector, todos) => {
    switch (visibilityFilterSelector) {
      case VisibilityFilterTypes.SHOW_ALL:
        return todos;
      case VisibilityFilterTypes.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      case VisibilityFilterTypes.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
    }
  }
);
