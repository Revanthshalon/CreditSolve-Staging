import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const PurchaseListScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>PurchaseListScreen</Text>
    </View>
  );
};

export default PurchaseListScreen;

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
