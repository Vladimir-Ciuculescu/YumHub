import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import { HStack, View, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Meal from "../interfaces/Meal";
import SegmentedControl from "./SegmentedControl";
import Ingredients from "./Ingredients";
import IngredientItem from "./IngredientItem";

interface MealDetailsProps {
  meal: Meal;
}

const Instructions = () => {
  return (
    <View style={{ backgroundColor: "blue" }}>
      <ScrollView>
        <Text>marian</Text>
        <Text>marian</Text>
        <Text>marian</Text>
        <Text>marian</Text>
        <Text>marian</Text>
        <Text>marian</Text>

        <Text>marian</Text>
        <Text>marian</Text>
        <Text>marian</Text>
      </ScrollView>
    </View>
  );
};

const MealDetails: React.FC<MealDetailsProps> = ({ meal }) => {
  const { title, ingredients, steps } = meal;
  const [width, setWidth] = useState<number>();
  const flatListRef = useRef(null);
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setWidth(width);
  };

  const sections = [
    { section: <Ingredients ingredients={ingredients} /> },
    { section: <Instructions /> },
  ];

  const renderItem = ({ item }) => {
    return <View style={{ width: width }}>{item.section}</View>;
  };

  return (
    <View flex={1} mx={7} mt={2}>
      <VStack space={4} flex={1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={24} fontFamily="Rozanova" w={"80%"}>
            {title}
          </Text>
          <HStack space={1} alignItems="center">
            <MaterialIcons name="timer" size={22} color="#a3a3a3" />
            <Text color="muted.400" fontSize={17}>
              15 min
            </Text>
          </HStack>
        </HStack>
        <Text fontFamily="Rozanova" fontSize={15} color="muted.400">
          This simple and delightful dish can be prepared immediatly and served
          anywhere
        </Text>

        <SegmentedControl
          tabs={["Ingredients", "Instructions"]}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
        />
        <FlatList
          onLayout={handleLayout}
          ref={flatListRef}
          data={sections}
          horizontal={true}
          renderItem={renderItem}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View p={2} />}
          data={ingredients}
          keyExtractor={(ingredient) => ingredient}
          renderItem={({ item }) => <IngredientItem ingredient={item} />}
          ListFooterComponent={<View style={{ height: 20 }} />}
        /> */}
      </VStack>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    flexGrow: 1,
    //flexGrow: 1,
    //alignItems: "flex-start",
  },
  element: {
    width: "100%", // Set the width to 100% of the ScrollView
    height: 50, // Adjust the height as needed
    backgroundColor: "blue", // Customize the background color
  },
});
