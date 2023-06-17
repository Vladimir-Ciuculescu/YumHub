import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, View, Pressable, HStack, Image, VStack } from "native-base";
import Meal from "../interfaces/MealInterface";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface MealItemProps {
  meal: Meal;
}

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  const { title, imageUrl, duration, complexity } = meal;

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      borderRadius={17}
      style={{
        shadowOpacity: 0.08,
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}
      bgColor="muted.100"
    >
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
            onPress={() => navigate("MealDetails", { meal: meal })}
          >
            <AntDesign name="arrowright" size={18} color="white" />
          </Pressable>
        </HStack>
      </HStack>
    </View>
  );
};

export default MealItem;
