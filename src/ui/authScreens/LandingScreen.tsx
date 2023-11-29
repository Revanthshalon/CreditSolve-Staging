import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AuthStackParamsList } from "../../routes/AuthStack";

const LandingScreen = () => {
  const nav = useNavigation<NavigationProp<AuthStackParamsList, "Landing">>();

  const insets = useSafeAreaInsets();

  const createAccountHandler = () => {
    nav.dispatch(StackActions.replace("Register"));
  };

  const signinHandler = () => {
    nav.dispatch(StackActions.replace("Login"));
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Image
        style={styles.introImage}
        source={require("../../assets/landingpage-min.png")}
      />
      <Text style={styles.title}>Stay on top of your finance with us</Text>
      <Text style={styles.subtitle}>
        We understand that accurate and up-to-date accounting records are
        essential for the financial health of any business. That's why we take a
        meticulous approach to every accounting journal entry you make.
      </Text>
      <Button
        label="Create account"
        onPress={createAccountHandler}
        style={styles.button}
        textStyle={styles.buttonLabel}
        activeOpacity={0.5}
        variant="filled"
        variantColor="#39b54a"
      />
      <Button
        label="Sign-in"
        onPress={signinHandler}
        variant="text"
        variantColor="#39b54a"
        textStyle={styles.buttonLabel}
        activeOpacity={0.5}
      />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212529",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingHorizontal: 20,
  },
  introImage: {
    height: 300,
    width: 300,
  },
  title: {
    color: "#f8f9fa",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#f8f9fa",
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 100,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 20,
  },
});
