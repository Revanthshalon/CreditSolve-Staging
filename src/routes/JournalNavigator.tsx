import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CompanyListScreen } from "../ui/companyScreens";
import { PaymentListScreen } from "../ui/paymentScreens";
import { PurchaseListScreen } from "../ui/purchaseScreens";

export type JournalStackParamList = {
  CompanyListScreen: undefined;
  PurchaseListScreen: undefined;
  PaymentListScreen: undefined;
};

const JournalNavigator = () => {
  const BottomTab = createBottomTabNavigator<JournalStackParamList>();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="CompanyListScreen"
        component={CompanyListScreen}
      />
      <BottomTab.Screen
        name="PurchaseListScreen"
        component={PurchaseListScreen}
      />
      <BottomTab.Screen
        name="PaymentListScreen"
        component={PaymentListScreen}
      />
    </BottomTab.Navigator>
  );
};

export default JournalNavigator;
