import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JournalNavigator from "./JournalNavigator";
import { CompanyDetailsScreen, ProfileScreen } from "../ui";
import HomeStack from "./HomeStack";
import { PaperProvider } from "react-native-paper";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  CompanyDetails: { companyId: string };
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
