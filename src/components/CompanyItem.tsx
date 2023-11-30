import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Company } from "../model";
import Animated, { FadeInDown } from "react-native-reanimated";
import Icons from "@expo/vector-icons/Ionicons";

type Props = {
  index: number;
  item: Company;
};

const CompanyItem = ({ index, item }: Props) => {
  // Handler Functions
  const editHandler = () => {
    console.log("Edit Handler");
  };

  const callHandler = () => {
    Linking.openURL(`tel:${item.contact}`);
  };

  const messageHandler = () => {
    Linking.openURL(`whatsapp://send?text=Hi&phone=${item.contact}`);
  };

  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <TouchableOpacity style={styles.rowContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>{item.name}</Text>
          <Text style={styles.bodyLabel}>
            {item.balance.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={editHandler}>
            <Icons name="pencil" size={20} color="#f8f9fa" />
          </TouchableOpacity>
          <TouchableOpacity onPress={callHandler}>
            <Icons name="call" size={20} color="#f8f9fa" />
          </TouchableOpacity>
          <TouchableOpacity onPress={messageHandler}>
            <Icons name="ios-chatbox" size={20} color="#f8f9fa" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CompanyItem;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#36393f",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    height: 70,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "column",
    gap: 5,
  },
  headerLabel: {
    color: "#f8f9fa",
    fontSize: 12,
  },
  bodyLabel: {
    color: "#f8f9fa",
    fontSize: 14,
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
