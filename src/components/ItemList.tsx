import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  listName: string;
};

const ItemList = (props: Props) => {
  return (
    <View style={{ marginHorizontal: 20, flex: 1 }}>
      <Text style={styles.label}>{props.listName}</Text>
      <FlatList
        data={[{ key: "a" }, { key: "b" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  label: {
    color: "#f8f9fa",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
