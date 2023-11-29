import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const PaymentListScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>PaymentListScreen</Text>
    </View>
  );
};

export default PaymentListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#f8f9fa",
  },
});
