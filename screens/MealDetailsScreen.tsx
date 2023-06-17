import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useWindowDimensions, Image } from "react-native";
import { Text, View } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import Spaghetii from "../assets/images/Spaghetti.webp";
import MealActions from "../components/MealActions";

const MealDetailsScreen: React.FC<any> = ({ navigation }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState<number>(0);

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const toggleSheet = useCallback((index: number) => {
    setIndex(index === 0 ? 1 : 0);
  }, []);

  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const BottomSheetBackground = (props) => {
    const { style } = props;
    return (
      <View
        {...props}
        style={[
          {
            backgroundColor: "white",
            borderRadius: 20,
          },
          { ...style },
        ]}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={Spaghetii} style={{ width: width, height: "52%" }} />
      <BottomSheet
        backgroundComponent={(props) => <BottomSheetBackground {...props} />}
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onAnimate={toggleSheet}
        animateOnMount={false}
      >
        <View style={{ flex: 1 }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
      <MealActions index={index} />
    </View>
  );
};

{
}
export default MealDetailsScreen;
