import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ComapanyListScreen,
  PurchaseListScreen,
  PaymentListScreen,
} from "../ui";
import Icons from "@expo/vector-icons/FontAwesome";
import IonIcons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { CustomTabBar, CustomTabBarButton } from "../components";

export type JournalStackParamList = {
  CompanyListScreen: undefined;
  PurchaseListScreen: undefined;
  PaymentListScreen: undefined;
};

const JournalNavigator = () => {
  const BottomTab = createBottomTabNavigator<JournalStackParamList>();
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#39b54a",
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="CompanyListScreen"
        component={ComapanyListScreen}
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name={focused ? "building" : "building-o"}
              color={color}
              size={size}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="PurchaseListScreen"
        component={PurchaseListScreen}
        options={{
          tabBarLabel: "Purchase",
          tabBarIcon: ({ focused, color, size }) => (
            <IonIcons
              name={focused ? "ios-cart" : "ios-cart-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="PaymentListScreen"
        component={PaymentListScreen}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ focused, color, size }) => (
            <IonIcons
              name={focused ? "card" : "card-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default JournalNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    position: "absolute",
    backgroundColor: "#36393f",
    paddingBottom: 0,
    bottom: 40,
    left: 16,
    right: 16,
    borderTopWidth: 0,
    borderRadius: 10,
  },
});
