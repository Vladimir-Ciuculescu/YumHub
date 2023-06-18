import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import { useFonts } from "expo-font";
import Rozanova from "./assets/fonts/Rozanova.otf";
import Navigation from "./Navigation";
import Nunito from "./assets/fonts/NunitoRegular.ttf";
import NunitoBold from "./assets/fonts/NunitoBold.ttf";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rozanova: Rozanova,
    Nunito: Nunito,
    NunitoBold: NunitoBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <StatusBar style="auto" />
          <Navigation />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
