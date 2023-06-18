import React from "react";
import { FlatList } from "react-native";
import { Text, View, HStack, VStack } from "native-base";
import IngredientItem from "./IngredientItem";
import InstructionItem from "./InstructionItem";

interface InstructionsProps {
  instructions: string[];
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {
  return (
    <View flex={1}>
      <VStack space={5} flex={1}>
        <HStack justifyContent="space-between">
          <Text fontSize={20} fontFamily="NunitoBold" color="muted.900">
            Instructions
          </Text>
          <Text fontSize={15} color="muted.400" fontFamily="Nunito">
            {instructions.length} steps
          </Text>
        </HStack>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View p={2} />}
          data={instructions}
          keyExtractor={(ingredient) => ingredient}
          renderItem={({ item, index }) => (
            <InstructionItem instruction={item} number={index} />
          )}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </VStack>
    </View>
  );
};

export default Instructions;
