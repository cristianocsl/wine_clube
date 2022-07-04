import React, { useState } from 'react'
import { Stack, Radio, RadioGroup, Text } from '@chakra-ui/react'

export default function MyRadioGroup(props: any) {
  const { filterByPrice } = props;
  return (
    <RadioGroup bg={'background'}
      width={{ base: '0px', lg: '550px'}}
      display={{ base: 'none', lgg: 'block'}}
      pl={'0px'}
      color={'#1D1D1B'}
      mt={'100px'}
      ml={'50px'}
      onChange={ (value: string) => filterByPrice(+value) }
    >
      <Stack>
        <Radio value='1'>Até R$40</Radio>
        <Radio value='2'>R$40 A R$60</Radio>
        <Radio value='3'>R$100 A R$200</Radio>
        <Radio value='4'>R$200 A R$500</Radio>
        <Radio value='5'>Acima de R$500</Radio>
        <Radio value='6'>Todos</Radio>
      </Stack>
    </RadioGroup>
  )
}


