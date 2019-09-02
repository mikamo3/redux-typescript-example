import React from "react";
import { Button } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  active: boolean;
}

const Link: React.FC<Props> = props => (
  <Button title={props.title} disabled={props.active} onPress={props.onPress} />
);
export default Link;
