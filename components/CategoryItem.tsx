import { Text } from "react-native";
import { View, Image } from "native-base";
import { Category } from "../interfaces/category";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { id, title, color, image } = category;
  return (
    <View w={40} h={40} margin="10px" bg={color}>
      <Text>{title}</Text>
      <Image source={image} width={10} height={10} />
    </View>
  );
};

export default CategoryItem;
