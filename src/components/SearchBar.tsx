import React from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = (props: Props) => {
  // Menu Button
  const nav = useNavigation();

  const [focusState, setFocusState] = React.useState(false);

  const leftIconPressHandler = () => {
    nav.dispatch(DrawerActions.openDrawer());
  };
  const rightIconPressHandler = () => {
    props.onChangeText("");
  };
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconLeftContainer}
          onPress={leftIconPressHandler}
        >
          <Icons name="menu" size={24} color="#6c757d" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            onFocus={() => setFocusState(true)}
            onBlur={() => {
              setFocusState(false);
              Keyboard.dismiss();
            }}
            value={props.value}
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              props.onChangeText(e.nativeEvent.text);
            }}
          />
        </View>
        {focusState && (
          <TouchableOpacity
            style={styles.iconRightContainer}
            onPress={rightIconPressHandler}
          >
            <Icons name="clear" size={24} color="#6c757d" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerWrapper: {},
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    width: 350,
    columnGap: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#6c757d",
    marginVertical: 10,
  },
  iconLeftContainer: {},
  searchContainer: {
    flex: 2,
  },
  iconRightContainer: {},
});
