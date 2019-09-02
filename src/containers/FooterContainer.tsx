import Footer, { DispatchProps } from "../components/Footer";
import { Dispatch } from "redux";
import { operations, types } from "../state/ducks/todo";
import { connect } from "react-redux";
import { AppState } from "../state/store";

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todoState.todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    onPressAll: () => {
      dispatch(
        operations.setVisibilityFilter(types.VisibilityFilterTypes.SHOW_ALL)
      );
    },
    onPressActive: () => {
      dispatch(
        operations.setVisibilityFilter(types.VisibilityFilterTypes.SHOW_ACTIVE)
      );
    },
    onPressCompleted: () => {
      dispatch(
        operations.setVisibilityFilter(
          types.VisibilityFilterTypes.SHOW_COMPLETED
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
