import React from "react";
import { StyleSheet, View } from "react-native";
import configureStore from "./state/store";
import { Provider } from "react-redux";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

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
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </View>
    </Provider>
  );
}
