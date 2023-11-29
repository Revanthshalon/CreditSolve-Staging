import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthStackParamsList } from "../../routes/AuthStack";
import Input from "../../components/Input";
import Button from "../../components/Button";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Navigation
  const nav = useNavigation<NavigationProp<AuthStackParamsList, "Login">>();

  const insets = useSafeAreaInsets();

  const createAccountHandler = () => {
    nav.dispatch(StackActions.push("Register"));
  };

  const forgotPasswordHandler = () => {};

  const signinHandler = () => {};
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.loginWrapper}>
          <View>
            <Text style={styles.header}>Login</Text>
            <View style={styles.formContainer}>
              <Input placeholder="Email" value={email} />
              <Input placeholder="Password" type="password" value={password} />
            </View>
            <Button
              label="Login"
              onPress={signinHandler}
              style={styles.button}
              textStyle={styles.buttonLabel}
              activeOpacity={0.5}
              variant="filled"
              variantColor="#39b54a"
            />
            <Button
              label="Forgot Password?"
              onPress={forgotPasswordHandler}
              variant="text"
              variantColor="#39b54a"
              textStyle={{ textAlign: "center" }}
              activeOpacity={0.5}
            />
          </View>
          <View style={styles.footer}>
            <Button
              label="Don't have an account? Sign-up"
              onPress={createAccountHandler}
              variant="text"
              variantColor="#39b54a"
              textStyle={{ textAlign: "center" }}
              activeOpacity={0.5}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212529",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 50,
  },
  formContainer: {
    height: 260,
    rowGap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonLabel: {
    fontSize: 20,
    textAlign: "center",
  },
  loginWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
  },
});
