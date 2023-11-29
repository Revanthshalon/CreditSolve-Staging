import {
  Image,
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
import { RootStackParamList } from "../routes/RootStack";

type Props = {};

const Profile = (props: Props) => {
  // Get Navigation from UseNavigation hook
  const nav = useNavigation<NavigationProp<RootStackParamList, "Profile">>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        nav.dispatch(StackActions.push("Profile"));
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profilePicture}
        />
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileLabel}>User Name</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#fff",
  },
  profileDetailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  profileLabel: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
