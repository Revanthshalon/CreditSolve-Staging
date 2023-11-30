import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import companyList from "../../data/seed";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompanyItem, SearchBar } from "../../components";

const CompanyListScreen = () => {
  const [companies, setCompanies] = React.useState(companyList);
  const [searchText, setSearchText] = React.useState("");

  const filteredCompaniesByName = companies.filter((company) =>
    company.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View>
          <SearchBar value={searchText} onChangeText={setSearchText} />
        </View>
        <View style={styles.listContainer}>
          {!filteredCompaniesByName && (
            <Text style={styles.label}>No Companies Added Yet</Text>
          )}
          {filteredCompaniesByName && (
            <FlatList
              data={filteredCompaniesByName}
              keyExtractor={(item) => item._id}
              renderItem={({ index, item }) => (
                <CompanyItem index={index} item={item} />
              )}
              showsVerticalScrollIndicator={false}
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    color: "#f8f9fa",
  },
  listContainer: {
    backgroundColor: "#212529",
    maxHeight: 620,
    width: "92%",
  },
});
