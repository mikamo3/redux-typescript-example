import { createAsyncAction } from "typesafe-actions";
import { TodoAsync } from "./types";

export const fetchTodo = createAsyncAction(
  "FETCH_TODO_REQUEST",
  "FETCH_TODO_SUCCEED",
  "FETCH_TODO_FAILED"
)<undefined, TodoAsync[], undefined>();
