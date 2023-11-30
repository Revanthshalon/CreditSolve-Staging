import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import companyList from "../../data/seed";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompanyItem, SearchBar, FloatingButton } from "../../components";
import CompanyForm from "./CompanyForm";
import Icons from "@expo/vector-icons/Ionicons";

const CompanyListScreen = () => {
  const [companies, setCompanies] = React.useState(companyList);
  const [searchText, setSearchText] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

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
        <FloatingButton
          onPress={() => {
            setVisibility(true);
          }}
          Icon={<Icons name="add" size={24} color="#f8f9fa" />}
          style={styles.floatingButton}
        />
        <CompanyForm
          visibility={visibility}
          setVisibility={setVisibility}
          formtype="add"
        />
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
  floatingButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "#39b54a",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
