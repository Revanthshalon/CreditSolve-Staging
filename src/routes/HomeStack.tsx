import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "../ui";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JournalNavigator from "./JournalNavigator";
import CustomeDrawer from "../components/CustomDrawer";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const HomeStack = () => {
  const Drawer = createDrawerNavigator<HomeStackParamList>();
  return (
    <NavigationContainer>
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
          name="ProfileScreen"
          options={{ drawerLabel: "Profile" }}
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
