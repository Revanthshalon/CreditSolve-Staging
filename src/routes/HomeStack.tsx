import React from "react";
import { SettingsScreen } from "../ui";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JournalNavigator from "./JournalNavigator";
import CustomeDrawer from "../components/CustomDrawer";

export type HomeStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const HomeStack = () => {
  const Drawer = createDrawerNavigator<HomeStackParamList>();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomeDrawer {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#39b54a",
        drawerActiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "#212529",
        },
        drawerLabelStyle: {
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: "Journal",
        }}
        component={JournalNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ drawerLabel: "Settings" }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default HomeStack;
