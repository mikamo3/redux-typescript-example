import React from "react";
import { View, Button } from "react-native";

export interface DispatchProps {
  onPressAll: () => void;
  onPressCompleted: () => void;
  onPressActive: () => void;
}
type Props = DispatchProps;
const Footer: React.FC<Props> = props => (
  <View>
    <Button title="All" onPress={props.onPressAll} />
    <Button title="Completed" onPress={props.onPressCompleted} />
    <Button title="Active" onPress={props.onPressActive} />
  </View>
);

export default Footer;
