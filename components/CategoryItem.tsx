import { GestureResponderEvent } from "react-native";
import { View, Image, VStack, Pressable, Text } from "native-base";
import { Category } from "../interfaces/Category";

interface CategoryItemProps {
  category: Category;
  onPress: (e: string[] | GestureResponderEvent) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onPress }) => {
  const { id, title, color, image } = category;
  return (
    <View>
      <Pressable
        w={40}
        h={40}
        margin="10px"
        bg={color}
        borderRadius={20}
        shadow={5}
        justifyContent="center"
        _pressed={{ opacity: 0.75 }}
        onPress={onPress}
      >
        <VStack space={3} alignItems="center">
          <Image source={image} alt={title} width={10} height={10} />
          <Text fontFamily="Nunito" fontSize={15}>
            {title}
          </Text>
        </VStack>
      </Pressable>
    </View>
  );
};

export default CategoryItem;
