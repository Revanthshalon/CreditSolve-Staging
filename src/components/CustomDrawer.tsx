import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Profile from "./Profile";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: Props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Profile />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Logout"
        onPress={() => {
          console.log("Logout");
        }}
        labelStyle={{ color: "white" }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
