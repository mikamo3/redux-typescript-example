import { TodoState, TodoActionTypes, TodoActions } from "./types";

const initialState: TodoState = {
  todos: []
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            message: action.payload.message,
            done: false
          }
        ]
      };
    case TodoActions.DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id;
        })
      };

    case TodoActions.UPDATE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id === action.payload.todo.id
            ? action.payload.todo
            : todo;
        })
      };
    default:
  }
}
