import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./src/routes/AuthStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeStack from "./src/routes/HomeStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <HomeStack />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
