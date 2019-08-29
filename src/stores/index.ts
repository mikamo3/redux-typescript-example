import { combineReducers, createStore } from "redux";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  todo: todoReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
