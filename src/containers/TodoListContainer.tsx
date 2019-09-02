import TodoList, { StateProps, DispatchProps } from "../components/TodoList";
import { AppState } from "../state/store";
import { Dispatch } from "redux";
import { operations, selectors } from "../state/ducks/todo";
import { connect } from "react-redux";
const mapStateToProps = (state: AppState): StateProps => {
  return {
    todos: selectors.visibleTodoSelector(state.todoState)
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    toggleTodo: (id: string) => {
      dispatch(operations.toggleTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
