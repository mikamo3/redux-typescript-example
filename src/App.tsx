import React from "react";
import { StyleSheet, View } from "react-native";
import configureStore from "./state/store";
import { Provider } from "react-redux";
import TodoInputFormContainer from "./containers/TodoInputFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import FooterContainer from "./containers/FooterContainer";

const store = configureStore();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoListContainer />
        <TodoInputFormContainer />
        <FooterContainer />
      </View>
    </Provider>
  );
}
