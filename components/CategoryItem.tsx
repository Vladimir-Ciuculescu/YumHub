import { Text } from "react-native";
import { Category } from "../interfaces/category";

const CategoryItem: React.FC<Category> = ({ id, title, color }) => {
  return <Text>{title}</Text>;
};

export default CategoryItem;
