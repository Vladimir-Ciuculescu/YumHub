import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import Trueno from "./assets/fonts/TruenoRound.otf";

export default function App() {
  useFonts({
    Trueno: Trueno,
  });

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <CategoriesScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
