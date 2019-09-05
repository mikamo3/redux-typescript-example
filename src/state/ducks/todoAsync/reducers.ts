import * as actions from "./actions";
import { TodoAsyncState } from "./types";
import { ActionType, createReducer } from "typesafe-actions";
type TodoAsyncAction = ActionType<typeof actions>;

const initialState: TodoAsyncState = {
  todos: [],
  loading: false
};

const todoAsyncReducer = createReducer<TodoAsyncState, TodoAsyncAction>(
  initialState
)
  .handleAction(actions.fetchTodo.request, state => {
    return { ...state, loading: true };
  })
  .handleAction(actions.fetchTodo.success, (state, action) => {
    return { todos: [...action.payload], loading: false };
  });

export default todoAsyncReducer;
