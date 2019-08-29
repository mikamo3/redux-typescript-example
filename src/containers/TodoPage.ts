import { todoOperations } from "../stores/todo";
import { AppState } from "../stores";
import { connect } from "react-redux";
const mapStateToProps = (state: AppState) => {
  return {
    todo: state.todo
  };
};
const mapDispatchToProps = {
  submit: todoOperations.addTodo,
  update: todoOperations.updateTodo,
  delete: todoOperations.deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
