import React from "react";
import { Button } from "react-native";
export interface Props {
  title: string;
  active: boolean;
  onPress: () => void;
}
const Link: React.FC<Props> = props => (
  <Button title={props.title} disabled={props.active} onPress={props.onPress} />
);
export default Link;
