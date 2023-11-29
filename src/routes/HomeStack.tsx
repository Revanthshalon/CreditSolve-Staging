import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "../ui";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
