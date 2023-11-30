import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

type Props = {
  label: string;
  goBack: () => void;
  deleteCompany: () => void;
};

const Header = (props: Props) => {
  return (
    <View style={styles.containerWrapper}>
      <TouchableOpacity style={styles.leftContainer} onPress={props.goBack}>
        <Icons name="chevron-back" size={24} color="#f8f9fa" />
      </TouchableOpacity>
      <Text style={[styles.header]}>{props.label}</Text>
      <TouchableOpacity
        style={[styles.rightContainer]}
        onPress={props.deleteCompany}
      >
        <Icons name="trash" size={20} color="#B03020" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerWrapper: {
    flexDirection: "row",
    paddingTop: 20,
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  header: {
    flex: 1,
    color: "white",
    fontSize: 40,
    justifyContent: "center",
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
