import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../../routes/RootStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompanyCard, Header } from "../../components";

const CompanyDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "CompanyDetails">>();
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <Header
          label="Company Details"
          goBack={() => {
            nav.dispatch(StackActions.pop(1));
          }}
          deleteCompany={() => {}}
        />
        <View style={{ width: "100%" }}>
          <CompanyCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#212529",
  },
  header: {
    color: "white",
    fontSize: 40,
  },
});
