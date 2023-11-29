import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import companyList from "../../data/seed";
import { SafeAreaView } from "react-native-safe-area-context";

const CompanyListScreen = () => {
  const [companies, setCompanies] = React.useState(companyList);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212529" }}>
      <View style={styles.container}>
        <View>
          {/* TODO: Add A Search Bar Component Here */}
          <Text>Search Bar</Text>
        </View>
        <View style={styles.listContainer}>
          {/* TODO: Add a List Rendering Component Here */}
          {!companyList && (
            <Text style={styles.label}>No Companies Added Yet</Text>
          )}
          {companyList && (
            <FlatList
              data={companyList}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <Text>{item.name}</Text>}
            />
          )}
        </View>
        {/* Add a Floating Action Button Component Here */}
      </View>
    </SafeAreaView>
  );
};

export default CompanyListScreen;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#f8f9fa",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
});
