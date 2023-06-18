import { IconButton } from "native-base";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RootState } from "../redux/store";
import Meal from "../interfaces/Meal";
import { addFavorite, removeFavorite } from "../redux/favorites";

interface MealActionsProps {
  index: number;
  meal: Meal;
}

const MealActions: React.FC<MealActionsProps> = ({ index, meal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const opacityValue = useSharedValue(1);
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  const changeOpacity = () => {
    opacityValue.value = withTiming(index === 0 ? 1 : 0, { duration: 100 });
  };

  useEffect(() => {
    changeOpacity();
  }, [index]);

  const AnimatedIcon = Animated.createAnimatedComponent(IconButton);

  const isFavorite = favorites.find((item) => item.id === meal.id);

  const toggleFavoriteMeal = () => {
    if (isFavorite) {
      dispatch(removeFavorite(meal));
    } else {
      dispatch(addFavorite(meal));
    }
  };

  return (
    <Fragment>
      <AnimatedIcon
        _pressed={{ backgroundColor: "white" }}
        onPress={() => navigation.goBack()}
        variant="solid"
        style={[
          {
            position: "absolute",
            width: 40,
            height: 40,
          },
          opacity,
        ]}
        top={20}
        left={10}
        borderRadius={10}
        bg="white"
        _icon={{
          as: Ionicons,
          name: "close-outline",
          size: 8,
          color: "muted.900",
        }}
        shadow={5}
      />

      <AnimatedIcon
        onPress={toggleFavoriteMeal}
        _pressed={{ backgroundColor: "white" }}
        variant="solid"
        style={[
          {
            position: "absolute",
            width: 40,
            height: 40,
          },
          opacity,
        ]}
        top={20}
        right={10}
        borderRadius={10}
        bg="white"
        _icon={{
          as: MaterialIcons,
          name: isFavorite ? "favorite" : "favorite-outline",
          size: 6,
          color: "red.500",
        }}
        shadow={5}
      />
    </Fragment>
  );
};

export default MealActions;
