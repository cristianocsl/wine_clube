import { Center, WrapItem, Image, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { WinesType } from "../services/typing";

export default function CardWine(props: { wine: WinesType}) {
  const { wine } = props;
  console.log(wine.priceMember.toString().split('.').pop()?.length)

  function decimal() {
    const thisDecimal = wine.priceMember.toString().split('.').pop()
    return thisDecimal?.length === 1 ? `${thisDecimal}0` : thisDecimal
  }

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
        borderRadius={'4px'}
      >
        <Image src={wine.image} alt={wine.name} height={'178.13px'} mb={'10px'}/>
        <Image
          src={'MaskGroup.svg'}
          alt={wine.name}
          height={{ base: '29', lg: '38.94px' }}
          position={'absolute'}
          ml={{ base: '-110px', lg: '170px' }}
          mt={{ base: '145px', lg: '125px' }}
        />

        <Center flexDirection={'column'} height={'100%'} justifyContent={'space-between'}>
          <Text align={'center'} fontSize={'14px'}>{wine.name}</Text>

          <Flex align={'center'}>
            <Text 
              fontSize={{ base: '10px', lg: '12px' }}
              color={'#888888'}
              textDecoration={'line-through'}
              mr={'4px'}
            >
              R${' ' + wine.priceNonMember.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Text>
            <Text
              fontSize={{ base: '12px', lg: '10px'}}
              bg={'#F79552'}
              width={{ base: '65px', lg: '48.67px' }}
              height={'16.21px'}
              align={'center'}
              color={'white'}
              borderRadius={'2px'}
              pt={'1.8px'}
            >
              {wine.discount}% OFF
            </Text>
          </Flex>

          <Flex alignContent={'center'}>
            <Text 
              fontSize={'10px'}
              color={{ base: '#555555', lg: '#1D1D1B' }}
              textAlign={'right'}
              mr={'8px'}
            >
              <Box> SÓCIO </Box><Box> WINE </Box>
            </Text>

            <Flex fontWeight={'bold'}>
              <Text
                color={'#C81A78'}
                fontSize={'12px'}
                alignSelf={'self-end'}
                mr={'4px'}
              >
                R$
              </Text>
              <Text
                fontSize={'22px'}
                height={'16.21px'}
                color={'#C81A78'}
              >
                {wine.priceMember.toLocaleString('pt-BR', { maximumFractionDigits: 0 }) + ','}
              </Text>
              <Text
                color={'#C81A78'}
                fontSize={'12px'}
                alignSelf={'self-end'}
              >
                { decimal() }
              </Text>
            </Flex>
          </Flex>

          <Text 
            fontSize={'10px'}
            color={'#888888'}
            mt={'8.4px'}
          >
            NÃO SÓCIO
          </Text>
        </Center>
      </Center>
    </WrapItem>
  );
}