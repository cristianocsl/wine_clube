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
        justifyContent={'start'}
      >
        <Image src={wine.image} alt={wine.name} height={'178.13px'} mt={'0px'}/>
        <Image
          src={'MaskGroup.svg'}
          alt={wine.name}
          height={'38.94px'}
          position={'absolute'}
          ml={{ base: '-105px', lg: '170px' }}
          mb={{ base: '0px', lg: '21.5px' }}
        />
        <Box>{wine.name}</Box>
      </Center>
    </WrapItem>
  );
}