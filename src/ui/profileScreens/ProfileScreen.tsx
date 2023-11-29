import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

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
