import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "../ui";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JournalNavigator from "./JournalNavigator";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const HomeStack = () => {
  const Drawer = createDrawerNavigator<HomeStackParamList>();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="HomeScreen" component={JournalNavigator} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
