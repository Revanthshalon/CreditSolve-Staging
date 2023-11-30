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
  activeOpacity?: number;
};

const FloatingButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}
      activeOpacity={props.activeOpacity || 0.7}
    >
      {props.Icon}
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({});
