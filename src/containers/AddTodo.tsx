import TodoInputForm from "../components/TodoInputForm";
import { operations } from "../state/ducks/todo";
import { Dispatch } from "redux";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPressAdd: (text: string) => {
    dispatch(operations.addTodo(text));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TodoInputForm);
