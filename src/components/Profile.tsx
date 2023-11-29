import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("navigate to profile page");
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profilePicture}
        />
        <View style={styles.profileDetailsContainer}>
          <Text style={{ color: "#fff", fontSize: 22 }}>User Name</Text>
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
});
