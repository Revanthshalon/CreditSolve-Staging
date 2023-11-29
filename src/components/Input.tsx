import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";
import { emailValidator, passwordValidator } from "../lib/utils";

type Props = {
  placeholder: string;
  value: string;
  onChange?: Dispatch<SetStateAction<string>>;
  style?: ViewStyle;
  textStyle?: TextStyle;
  type?: "email" | "text" | "password";
  iconOnPress?: () => void;
  onValidation?: Dispatch<SetStateAction<boolean>>;
};

const Input = ({
  placeholder,
  value,
  onChange,
  style,
  textStyle,
  type,
  onValidation,
}: Props) => {
  const [securePassword, setSecurePassword] = React.useState(true);
  const [validationState, setValidationState] = React.useState(true);

  const securePasswordHandler = () => {
    setSecurePassword((prevState) => !prevState);
  };

  const validate = (value: string) => {
    switch (type) {
      case "email":
        setValidationState(() => emailValidator(value));
        if (onValidation != undefined) {
          onValidation(() => validationState);
        }
        break;
      case "password":
        setValidationState(() => passwordValidator(value));
        if (onValidation != undefined) {
          onValidation(() => validationState);
        }
        break;
    }
  };

  return (
    <View
      style={[
        styles.inputContainer,
        style,
        {
          borderColor: validationState ? "#6c757d" : "red",
        },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          textStyle,
          {
            width: type == "password" ? "90%" : "100%",
            borderRadius: type == "password" ? undefined : 50,
          },
        ]}
        placeholder={placeholder}
        value={value}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          if (onChange != undefined) {
            onChange(e.nativeEvent.text);
          }
          validate(e.nativeEvent.text);
        }}
        secureTextEntry={type == "password" && securePassword}
      />
      {type == "password" && (
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.5}
          onPress={securePasswordHandler}
        >
          <Ionicons
            name={securePassword ? "ios-eye" : "ios-eye-off"}
            size={24}
            color="#212529"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#6c757d",
    height: 60,
    width: "100%",
    alignItems: "center",
  },
  input: {
    paddingLeft: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    height: "100%",
    justifyContent: "center",
  },
  iconContainer: {
    height: "100%",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: "10%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: {},
});
