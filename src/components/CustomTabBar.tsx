import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { EdgeInsets } from "react-native-safe-area-context";

type Props = {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
};

const CustomTabBar = (props: Props) => {
  return (
    <View>
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({});
