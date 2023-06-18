import React from "react";
import { Box, Text } from "native-base";

interface IngredientItemProps {
  ingredient: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient }) => {
  return (
    <Box
      mx={2}
      bg="muted.50"
      borderRadius={17}
      justifyContent="center"
      pl={4}
      style={{
        height: 60,
        borderWidth: 0.01,

        shadowOpacity: 0.08,
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}
    >
      <Text fontFamily="NunitoBold" fontSize={15}>
        {ingredient}
      </Text>
    </Box>
  );
};

export default IngredientItem;
