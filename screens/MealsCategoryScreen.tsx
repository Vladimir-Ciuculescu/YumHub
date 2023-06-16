import React, { useLayoutEffect } from "react";
import { Text, View, Pressable, FlatList, HStack, Image } from "native-base";
import { MEALS } from "../data/dummyData";
import { Ionicons } from "@expo/vector-icons";
import Spaghetti from "../assets/images/Spaghetti.webp";
import { AntDesign } from "@expo/vector-icons";
import MealItem from "../components/MealItem";

const MealsCategoryScreen: React.FC<any> = ({ navigation, route }) => {
  const { categoryId, category } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text fontFamily="Rozanova" fontSize={20}>
          {category}
        </Text>
      ),
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View px={5} pt={7} flex={1} bg="white">
      <FlatList
        ItemSeparatorComponent={() => <View p={2}></View>}
        data={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default MealsCategoryScreen;
