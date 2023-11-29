import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AuthStackParamsList } from "../../routes/AuthStack";

const RegisterScreen = () => {
  // State Variables
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailValidator, setEmailValidator] = React.useState(false);
  const [passwordValidator, setPasswordValidator] = React.useState(false);
  const [confirmPasswordValidator, setConfirmPasswordValidator] =
    React.useState(false);

  // Navigation
  const nav = useNavigation<NavigationProp<AuthStackParamsList, "Register">>();

  const insets = useSafeAreaInsets();

  const createAccountHandler = () => {
    if (
      emailValidator &&
      passwordValidator &&
      confirmPasswordValidator &&
      password === confirmPassword
    ) {
      console.log("Password Validation Success. Reroute to Home page");
    } else {
      console.log("Password Validation Error");
    }
  };
  const signinHandler = () => {
    nav.dispatch(StackActions.push("Login"));
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.header}>Create an account</Text>
          <View style={styles.formContainer}>
            <Input
              placeholder="Email"
              value={email}
              onChange={setEmail}
              type="email"
              onValidation={setEmailValidator}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={setPassword}
              onValidation={setPasswordValidator}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              onValidation={setConfirmPasswordValidator}
            />
          </View>
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
            label="Already have an account? Sign-in"
            onPress={signinHandler}
            variant="text"
            variantColor="#39b54a"
            textStyle={{ textAlign: "center" }}
            activeOpacity={0.5}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegisterScreen;

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
});
