import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import { useFonts } from "expo-font";
import Trueno from "./assets/fonts/TruenoRound.otf";
import Rozanova from "./assets/fonts/Rozanova.otf";
import Navigation from "./Navigation";

export default function App() {
  useFonts({
    Trueno: Trueno,
    Rozanova: Rozanova,
  });

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Navigation />
    </NativeBaseProvider>
  );
}
