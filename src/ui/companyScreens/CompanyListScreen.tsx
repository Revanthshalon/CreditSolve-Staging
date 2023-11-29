import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const CompanyListScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CompanyListScreen</Text>
    </View>
  );
};

export default CompanyListScreen;

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
