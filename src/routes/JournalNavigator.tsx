import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ComapanyListScreen,
  PurchaseListScreen,
  PaymentListScreen,
} from "../ui";

export type JournalStackParamList = {
  CompanyListScreen: undefined;
  PurchaseListScreen: undefined;
  PaymentListScreen: undefined;
};

const JournalNavigator = () => {
  const BottomTab = createBottomTabNavigator<JournalStackParamList>();
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="CompanyListScreen"
        component={ComapanyListScreen}
        options={{ tabBarLabel: "Company" }}
      />
      <BottomTab.Screen
        name="PurchaseListScreen"
        component={PurchaseListScreen}
        options={{ tabBarLabel: "Purchase" }}
      />
      <BottomTab.Screen
        name="PaymentListScreen"
        component={PaymentListScreen}
        options={{ tabBarLabel: "Payment" }}
      />
    </BottomTab.Navigator>
  );
};

export default JournalNavigator;
