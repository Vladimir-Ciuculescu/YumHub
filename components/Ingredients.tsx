import { FlatList } from "react-native";
import { HStack, View, Text, VStack } from "native-base";
import IngredientItem from "./IngredientItem";

interface IngredientsProps {
  ingredients: string[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <View flex={1}>
      <VStack space={5} flex={1}>
        <HStack justifyContent="space-between">
          <Text fontSize={20} fontFamily="Rozanova" color="muted.900">
            Ingredients
          </Text>
          <Text fontSize={15} color="muted.400">
            6 items
          </Text>
        </HStack>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View p={2} />}
          data={ingredients}
          keyExtractor={(ingredient) => ingredient}
          renderItem={({ item }) => <IngredientItem ingredient={item} />}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </VStack>
    </View>
  );
};

export default Ingredients;
