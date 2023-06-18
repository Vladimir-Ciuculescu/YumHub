import React from "react";
import { HStack, Text, Box } from "native-base";

interface InstructionItemProps {
  instruction: string;
  number: number;
}

const InstructionItem: React.FC<InstructionItemProps> = ({
  instruction,
  number,
}) => {
  return (
    <HStack space={4} flex={1}>
      <Box
        borderRadius={25}
        bg="muted.900"
        width={7}
        height={7}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontFamily="Nunito" color="muted.100">
          {number + 1}
        </Text>
      </Box>

      <Text
        style={{ flex: 1, flexWrap: "wrap", flexShrink: 1 }}
        fontFamily="NunitoBold"
        fontSize={17}
      >
        {instruction}
      </Text>
    </HStack>
  );
};

export default InstructionItem;
