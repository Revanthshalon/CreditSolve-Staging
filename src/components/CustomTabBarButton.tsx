import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const CustomTabBarButton = (props: BottomTabBarButtonProps) => {
  const scale = useSharedValue(0.9);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const focused = props.accessibilityState?.selected;

  React.useEffect(() => {
    if (focused) {
      scale.value = withSpring(1.2);
    } else {
      scale.value = withSpring(0.9);
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonWrapper}>
      <Animated.View style={animatedStyles}>{props.children}</Animated.View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
