import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

type Props = {
  label: string;
  onPress: () => void;
  activeOpacity?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant: "filled" | "outlined" | "text";
  variantColor: string;
};

const Button = ({
  label,
  onPress,
  activeOpacity,
  style,
  textStyle,
  variant,
  variantColor,
}: Props) => {
  const [pressState, setPressState] = React.useState(false);

  const pressInHandler = () => {
    setPressState((prevState) => !prevState);
  };
  const pressOutHandler = () => {
    setPressState((prevState) => !prevState);
  };
  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={[
        styles.buttonContainer,
        style,
        {
          opacity: pressState ? activeOpacity : 1,
          backgroundColor: variant == "filled" ? variantColor : undefined,
          borderColor: variant == "outlined" ? variantColor : undefined,
        },
      ]}
    >
      <Text
        style={[
          styles.textStyle,
          { color: variant == "text" ? variantColor : "#fff" },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 16,
  },
});
