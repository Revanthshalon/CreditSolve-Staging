import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const SettingsScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

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
