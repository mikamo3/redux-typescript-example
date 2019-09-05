import { takeEvery, call, put } from "redux-saga/effects";
import { fetch, TodoRequest } from "../../../api/todo";
import * as actions from "./actions";
export function* fetchTodosSaga(): Generator {
  const todosResponse: TodoRequest[] = yield call(fetch);
  console.log(todosResponse);
  yield put(actions.fetchTodo.success(todosResponse));
}

export const todoAsyncSagas = [
  takeEvery(actions.fetchTodo.request, fetchTodosSaga)
];

const fetchTodo = actions.fetchTodo.request;
export { fetchTodo };
