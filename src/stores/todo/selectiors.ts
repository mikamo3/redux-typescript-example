import { Todo } from "./types";
function checkDone(state: Todo) {
  return state.done;
}
function checkUndone(state: Todo) {
  return !state.done;
}
export { checkDone, checkUndone };
