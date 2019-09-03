import React from "react";
import { View, Text } from "react-native";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilterTypes } from "../state/ducks/todo/types";

const Footer: React.FC = () => (
  <View style={{ flexDirection: "row" }}>
    <Text>Show: </Text>
    <FilterLink filter={VisibilityFilterTypes.SHOW_ALL} title="All" />
    <FilterLink filter={VisibilityFilterTypes.SHOW_ACTIVE} title="Active" />
    <FilterLink
      filter={VisibilityFilterTypes.SHOW_COMPLETED}
      title="Completed"
    />
  </View>
);

export default Footer;
