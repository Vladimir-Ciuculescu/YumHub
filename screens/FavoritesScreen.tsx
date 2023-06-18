import React from "react";
import { FlatList } from "react-native";
import { Text, View } from "native-base";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MealItem from "../components/MealItem";

const FavoritesScreen: React.FC<any> = () => {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <View px={5} pt={7} flex={1} bg="white">
      <FlatList
        ItemSeparatorComponent={() => <View p={2} />}
        data={favorites}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;
