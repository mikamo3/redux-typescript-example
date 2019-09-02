import TodoInputForm, { DispatchProps } from "../components/TodoInputForm";
import { operations } from "../state/ducks/todo";
import { Dispatch } from "redux";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPressAdd: text => {
    dispatch(operations.addTodo(text));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TodoInputForm);
