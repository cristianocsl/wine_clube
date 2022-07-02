import { Center, WrapItem, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import { WinesType } from "../services/typing";

export default function CardWine(props: { wine: WinesType}) {
  const { wine } = props;

  return (
    <WrapItem margin={'0px'}>
      <Center
        key={wine.id}
        width={{ base: '140px', sm: '156px', lg: '256px'}}
        height={'333px'}
        flexDirection={'column'}
        padding={'10px'}
        justifyContent={'start'}
        bg={'white'}
        shadow={'lg'}
        mr={{ base: '14px', smm: '18px'}}
        ml={{ base: '14px', smm: '18px'}}
      >
        <Image src={wine.image} alt={wine.name} height={'178.13px'}/>
        <Image
          src={'MaskGroup.svg'}
          alt={wine.name}
          height={'38.94px'}
          position={'absolute'}
          ml={{ base: '-105px', lg: '170px' }}
          mt={{ base: '135px', lg: '125px' }}
        />
        <Text align={'center'}>{wine.name}</Text>
      </Center>
    </WrapItem>
  );
}