import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import Button from "./Button";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../routes/RootStack";
import companyList from "../data/seed";

type Props = {};

const CompanyCard = (props: Props) => {
  const route = useRoute<RouteProp<RootStackParamList, "CompanyDetails">>();

  // Get Company Details from Company Id
  const company = companyList.find((c) => c._id === route.params.companyId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{company?.name}</Text>
      <Text style={styles.contact}>{company?.contact}</Text>
      <Text style={styles.balance}>
        {company?.balance.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.updateContainer}>
          <Button
            onPress={() => {}}
            label="Edit"
            variant="text"
            variantColor="#39b54a"
            textStyle={{ textAlign: "center", fontSize: 16 }}
            style={{ paddingLeft: 0 }}
          />
        </View>
        <View style={styles.actionsContainer}>
          <Icons
            style={styles.icon}
            name="call-outline"
            size={20}
            color="#39b54a"
          />
          <Icons
            style={styles.icon}
            name="chatbox-outline"
            size={20}
            color="#39b54a"
          />
        </View>
      </View>
    </View>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: 180,
    borderWidth: 1,
    borderColor: "#6c757d",
    margin: 5,
    backgroundColor: "#36393f",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  contact: {
    fontSize: 16,
    color: "#FDF5E6",
    paddingTop: 5,
    paddingBottom: 20,
  },
  balance: {
    fontSize: 18,
    color: "white",
    paddingTop: 5,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  updateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
  },
});
