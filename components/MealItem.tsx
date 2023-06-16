import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { Text, View, Pressable, HStack, Image, Box, VStack } from "native-base";
import Meal from "../interfaces/MealInterface";

interface MealItemProps {
  meal: Meal;
}

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  const { title, imageUrl, duration, complexity } = meal;
  return (
    <View borderRadius={17} shadow={2} bgColor="muted.50">
      <HStack
        p={2.5}
        alignItems="center"
        justifyContent="space-between"
        space={4}
      >
        <Image
          source={{ uri: imageUrl }}
          width="110px"
          height="90px"
          borderRadius={10}
          alt="food"
        />
        <HStack
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <VStack
            width="80%"
            justifyContent="space-between"
            height={90}
            py={1}
            px={2}
          >
            <Text fontFamily="Rozanova" fontSize={14}>
              {title}
            </Text>
            <HStack justifyContent="space-between">
              <HStack alignItems="center" space={1}>
                <MaterialIcons name="timer" size={20} color="black" />
                <Text>{duration} min.</Text>
              </HStack>
              <HStack alignItems="center" space={1}>
                <MaterialCommunityIcons
                  name="food-turkey"
                  size={24}
                  color="black"
                />
                <Text>{complexity}</Text>
              </HStack>
            </HStack>
          </VStack>

          <Pressable
            bg="muted.900"
            borderRadius={7}
            width={7}
            height={7}
            justifyContent="center"
            alignItems="center"
          >
            <AntDesign name="arrowright" size={18} color="white" />
          </Pressable>
        </HStack>
      </HStack>
    </View>
  );
};

export default MealItem;
