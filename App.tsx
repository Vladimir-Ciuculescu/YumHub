import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <CategoriesScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
