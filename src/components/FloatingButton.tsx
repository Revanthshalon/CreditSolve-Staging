import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type Props = {
  onPress: () => void;
  Icon: React.ReactNode;
  style: ViewStyle;
};

const FloatingButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.Icon}
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({});
