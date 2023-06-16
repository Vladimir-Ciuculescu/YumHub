import React, { useLayoutEffect } from "react";
import { Text, View, Pressable } from "native-base";
import { MEALS } from "../data/dummyData";
import { Ionicons } from "@expo/vector-icons";

const MealsCategoryScreen: React.FC<any> = ({ navigation, route }) => {
  const { categoryId, category } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: category,
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
    <View bg="red.400" px={7} pt={7} flex={1}>
      {meals.map((meal, key) => (
        <Text fontFamily="Rozanova" key={key}>
          {meal.title}
        </Text>
      ))}
    </View>
  );
};

export default MealsCategoryScreen;
