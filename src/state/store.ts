import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./ducks";
import createSagaMiddleware from "@redux-saga/core";

const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );
  return store;
}
