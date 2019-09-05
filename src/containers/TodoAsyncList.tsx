import React from "react";
import { operations } from "../state/ducks/todoAsync";
import { View, Text } from "react-native";
import { TodoAsync } from "../state/ducks/todoAsync/types";
import { AppState } from "../state/store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
interface Props {
  todos: TodoAsync[];
  loading: boolean;
  fetch: () => void;
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todoAsyncState.todos,
  loading: state.todoAsyncState.loading
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetch: () => dispatch(operations.fetchTodo())
});
class TodoAsyncList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <View>
        {this.props.loading && <Text>loading</Text>}
        {this.props.todos.map(todo => (
          <Text key={todo.id}>{todo.text}</Text>
        ))}
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAsyncList);
