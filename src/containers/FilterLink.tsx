import { AppState } from "../state/store";
import { Dispatch } from "redux";
import { operations, types } from "../state/ducks/todo";
import { connect } from "react-redux";
import Link from "../components/Link";
interface OwnProps {
  title: string;
  filter: types.VisibilityFilterTypes;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  active: state.todoState.filter === ownProps.filter,
  title: ownProps.title
});
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onPress: () => {
    dispatch(operations.setVisibilityFilter(ownProps.filter));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
