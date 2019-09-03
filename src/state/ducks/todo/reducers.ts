import { TodoState, VisibilityFilterTypes, Todo } from "./types";
import { ActionType, createReducer, getType } from "typesafe-actions";
import * as actions from "./actions";
import { combineReducers } from "redux";
export const initialState: TodoState = {
  todos: [],
  filter: VisibilityFilterTypes.SHOW_ALL
};
export type TodoAction = ActionType<typeof actions>;

const todos = createReducer<Todo[], TodoAction>(initialState.todos)
  .handleAction(actions.addTodo, (state, action) => {
    return [
      ...state,
      { id: state.length + 1, text: action.payload, completed: false }
    ];
  })
  .handleAction(actions.toggleTodo, (state, action) => {
    return state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  });

const filter = createReducer<VisibilityFilterTypes, TodoAction>(
  initialState.filter
).handleAction(actions.setVisibilityFilter, (state, action) => {
  return action.payload;
});

const reducer = combineReducers<TodoState, TodoAction>({ todos, filter });
const todoReducer = combineReducers<TodoState, TodoAction>({
  todos: (state = initialState.todos, action) => {
    switch (action.type) {
      case getType(actions.addTodo):
        return [
          ...state,
          { id: state.length + 1, text: action.payload, completed: false }
        ];
      case getType(actions.toggleTodo):
        return state.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      default:
        return state;
    }
  },
  filter: (state = initialState.filter, action) => {
    switch (action.type) {
      case getType(actions.setVisibilityFilter):
        return action.payload;
      default:
        return state;
    }
  }
});
export default todoReducer;
