import { IconButton } from "native-base";
import React, { Fragment, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface MealActionsProps {
  index: number;
}

const MealActions: React.FC<MealActionsProps> = ({ index }) => {
  const navigation = useNavigation();

  const opacityValue = useSharedValue(1);

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
          name: "favorite-outline",
          size: 6,
          color: "muted.900",
        }}
        shadow={5}
      />
    </Fragment>
  );
};

export default MealActions;
