import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsCategoryScreen from "./screens/MealsCategoryScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable } from "native-base";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Pressable ml={4} onPress={navigation.toggleDrawer}>
            <Entypo name="menu" size={26} color="black" />
          </Pressable>
        ),
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "black",
        drawerLabelStyle: {
          fontFamily: "NunitoBold",
          fontSize: 17,
        },
      })}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name="CategoriesScreen"
        options={{
          title: "All Categories",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "food-drumstick-outline" : "food-drumstick"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        component={FavoritesScreen}
        name="FavoritesScreen"
        options={{
          title: "Favorites",
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite-outline" : "favorite"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigation: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={MealsCategoryScreen} name="MealsCategory" />
        <Stack.Screen component={MealDetailsScreen} name="MealDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
