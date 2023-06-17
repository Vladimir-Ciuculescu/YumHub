import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsCategoryScreen from "./screens/MealsCategoryScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const Navigation: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen component={CategoriesScreen} name="Categories" />
        <Stack.Screen component={MealsCategoryScreen} name="MealsCategory" />
        <Stack.Screen component={MealDetailsScreen} name="MealDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
