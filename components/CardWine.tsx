import { Center, WrapItem, Image, Box } from "@chakra-ui/react";
import React from "react";
import { WinesType } from "../services/typing";

export default function CardWine(props: { wine: WinesType}) {
  const { wine } = props;
  return (
    <WrapItem>
      <Center
        key={wine.id}
        width={{ base: '156px', lg: '256px'}}
        height={'333px'}
        borderWidth={'1px'}
        flexDirection={'column'}
        padding={'10px'}
        mt={'10px'}
      >
        <Image src={wine.image} alt={wine.name} height={'178.13px'} mt={'-70px'}/>
        <Image
          src={'MaskGroup.svg'}
          alt={wine.name}
          height={'38.94px'}
          position={'absolute'}
          ml={'170px'}
          mb={'21.5px'}
        />
        <Box>{wine.name}</Box>
      </Center>
    </WrapItem>
  );
}