import { selectors, operations } from "../state/ducks/todo";
import { AppState } from "../state/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state: AppState) => ({
  todos: selectors.getVisibleTodos(state.todoState)
});
const mapDispatchToProps = (dispath: Dispatch) => ({
  toggleTodo: (id: number) => dispath(operations.toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
