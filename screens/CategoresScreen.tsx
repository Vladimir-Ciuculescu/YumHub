import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen: React.FC<any> = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryItem id={item.id} title={item.title} color={item.color} />
      )}
    />
  );
};

export default CategoriesScreen;
