import {
  Keyboard,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../../components";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  formtype: "add" | "edit";
  companyId?: string;
};

const CompanyForm = (props: Props) => {
  const insets = useSafeAreaInsets();

  // Company Form State Variables
  const [companyName, setCompanyName] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const [balance, setBalance] = React.useState("");

  const formClear = () => {
    setCompanyName("");
    setContactNo("");
    setBalance("");
  };

  const submitHandler = () => {
    // Submit to realm
    console.log("In Submit Handler");
    props.setVisibility(false);
    formClear();
  };

  const cancelHandler = () => {
    console.log("In Cancel Handler");
    props.setVisibility(false);
    formClear();
  };

  return (
    <Modal
      visible={props.visibility}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <SafeAreaView
        style={[styles.containerWrapper, { paddingBottom: insets.bottom }]}
      >
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.container}>
            <View style={styles.body}>
              <Text style={styles.header}>
                {props.formtype === "add" ? "New" : "Edit"} Company Form
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Company Name"
                placeholderTextColor={"#6c757d"}
                value={companyName}
                onChange={(
                  e: NativeSyntheticEvent<TextInputChangeEventData>
                ) => {
                  setCompanyName(e.nativeEvent.text);
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Contact No."
                placeholderTextColor={"#6c757d"}
                value={contactNo}
                onChange={(
                  e: NativeSyntheticEvent<TextInputChangeEventData>
                ) => {
                  setContactNo(e.nativeEvent.text);
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Balance"
                placeholderTextColor={"#6c757d"}
                value={balance}
                onChange={(
                  e: NativeSyntheticEvent<TextInputChangeEventData>
                ) => {
                  setBalance(e.nativeEvent.text);
                }}
              />
            </View>
            <View>
              <Button
                label="Submit"
                onPress={submitHandler}
                variant="filled"
                variantColor="#39b54a"
                textStyle={{ textAlign: "center" }}
                activeOpacity={0.5}
              />
              <Button
                label="Cancel"
                onPress={cancelHandler}
                variant="text"
                variantColor="#39b54a"
                textStyle={{ textAlign: "center" }}
                activeOpacity={0.5}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Modal>
  );
};

export default CompanyForm;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    backgroundColor: "#212529",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  body: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f8f9fa",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#f8f9fa",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
