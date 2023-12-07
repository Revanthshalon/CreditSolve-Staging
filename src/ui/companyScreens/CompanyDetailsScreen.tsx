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
import { CompanyCard, Header, ItemList } from "../../components";

const CompanyDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "CompanyDetails">>();
  const nav = useNavigation();

  const goBackHandler = () => {
    nav.dispatch(StackActions.pop(1));
  };

  const deleteCompanyHandler = () => {
    console.log("Delete Company");
  };

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <Header
          label="Company Details"
          goBack={goBackHandler}
          deleteCompany={deleteCompanyHandler}
        />
        <View style={{ flex: 1, width: "100%" }}>
          <CompanyCard />
          <ItemList listName="Related Purchases" />
          <ItemList listName="Related Payments" />
          <Text>{route.params.companyId}</Text>
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
  label: {
    color: "#f8f9fa",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
