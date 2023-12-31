import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useWindowDimensions, Image } from "react-native";
import { View } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import Spaghetii from "../assets/images/Spaghetti.webp";
import MealActions from "../components/MealActions";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen: React.FC<any> = ({ navigation, route }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState<number>(0);

  const { width } = useWindowDimensions();

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const toggleSheet = useCallback((index: number) => {
    setIndex(index === 0 ? 1 : 0);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const {
    params: { meal },
  } = route;

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
      <Image
        source={{ uri: meal.imageUrl }}
        style={{ width: width, height: "52%" }}
      />
      <BottomSheet
        backgroundComponent={(props) => <BottomSheetBackground {...props} />}
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onAnimate={toggleSheet}
        animateOnMount={false}
      >
        <MealDetails meal={meal} />
      </BottomSheet>
      <MealActions index={index} meal={meal} />
    </View>
  );
};

{
}
export default MealDetailsScreen;
