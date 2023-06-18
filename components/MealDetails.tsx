import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { HStack, View, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Meal from "../interfaces/Meal";
import SegmentedControl from "./SegmentedControl";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

interface MealDetailsProps {
  meal: Meal;
}

const MealDetails: React.FC<MealDetailsProps> = ({ meal }) => {
  const { title, ingredients, steps } = meal;
  const [width, setWidth] = useState<number>();
  const flatListRef = useRef(null);
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setWidth(width);
  };

  useEffect(() => {
    if (tabIndex === 1) {
      flatListRef.current?.scrollToEnd({ animated: true });
    } else {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [tabIndex]);

  const sections = [
    { section: <Ingredients ingredients={ingredients} /> },
    { section: <Instructions instructions={steps} /> },
  ];

  const renderItem = ({ item }) => {
    return <View style={{ width: width }}>{item.section}</View>;
  };

  return (
    <View flex={1} mx={7} mt={2}>
      <VStack space={4} flex={1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={24} fontFamily="NunitoBold" w={"80%"}>
            {title}
          </Text>
          <HStack space={1} alignItems="center">
            <MaterialIcons name="timer" size={22} color="#a3a3a3" />
            <Text color="muted.400" fontSize={17} fontFamily="Nunito">
              15 min
            </Text>
          </HStack>
        </HStack>
        <Text fontFamily="Nunito" fontSize={15} color="muted.400">
          This simple and delightful dish can be prepared immediatly and served
          anywhere
        </Text>

        <SegmentedControl
          tabs={["Ingredients", "Instructions"]}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
        />
        <FlatList
          scrollEnabled={false}
          onLayout={handleLayout}
          ref={flatListRef}
          data={sections}
          horizontal={true}
          renderItem={renderItem}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View />}
        />
      </VStack>
    </View>
  );
};

export default MealDetails;
