import { createStandardAction } from "typesafe-actions";
import { VisibilityFilterTypes } from "./types";

export const addTodo = createStandardAction("ADD_TODO")<string>();
export const toggleTodo = createStandardAction("TOGGLE_TODO")<number>();
export const setVisibilityFilter = createStandardAction(
  "SET_VISIBILITY_FILTER"
)<VisibilityFilterTypes>();
