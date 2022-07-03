import { Center, WrapItem, Image, Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { WinesType } from "../services/typing";

export default function CardWine(props: { wine: WinesType}) {
  const { wine } = props;

  function decimal() {
    const thisDecimal = wine.priceMember.toString().split('.').pop();
    return thisDecimal?.length === 1 ? `${thisDecimal}0` : thisDecimal;
  }

  return (
    <WrapItem margin={'0px'} display={'block'} textAlign={'center'}>
      <Center
        key={wine.id}
        width={{ base: '140px', sm: '156px', lg: '256px'}}
        height={'333px'}
        flexDirection={'column'}
        padding={'10px'}
        justifyContent={'start'}
        bg={'white'}
        shadow={'md'}
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
          <Text align={'center'} fontSize={{ base: '14px', lg: '16px' }}>{wine.name}</Text>

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
            fontSize={{ base: '10px', lg: '12px' }}
            color={'#888888'}
            mt={'8.4px'}
          >
            NÃO SÓCIO
          </Text>
        </Center>
      </Center>

      <Button
        mt={{ base: '8px', lg: '16px' }}
        width={{ base: '140px', sm: '156px', lg: '256px'}}
        bg={'#7EBC43'}
        color={'white'}
        borderRadius={'4px'}
        fontSize={'14px'}
        height={'40px'}
        mb={{ base: '24px', lg: '30.64px' }}
        textTransform={{ base: 'capitalize', lg: 'uppercase'}}
        fontWeight={'bold'}
        shadow={'base'}
        colorScheme='teal'
        _hover={{ bg: '#457F0D' }}
        
      >
        Adicionar
      </Button>
    </WrapItem>
  );
}