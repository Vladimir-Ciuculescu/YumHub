import { Text, FlatList } from "react-native";
import { View } from "native-base";
import { CATEGORIES } from "../data/dummyData";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen: React.FC<any> = ({ navigation }) => {
  const goToCategory = (categoryId: string, category: string) => {
    navigation.navigate("MealsCategory", {
      categoryId: categoryId,
      category: category,
    });
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            onPress={() => goToCategory(item.id, item.title)}
          />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
