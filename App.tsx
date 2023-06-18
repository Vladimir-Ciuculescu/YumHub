import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import { useFonts } from "expo-font";
import Rozanova from "./assets/fonts/Rozanova.otf";
import Navigation from "./Navigation";
import Nunito from "./assets/fonts/NunitoRegular.ttf";
import NunitoBold from "./assets/fonts/NunitoBold.ttf";

export default function App() {
  useFonts({
    Nunito: Nunito,
    NunitoBold: NunitoBold,
  });

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Navigation />
    </NativeBaseProvider>
  );
}
