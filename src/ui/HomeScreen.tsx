import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
