import { background, Box, color, Flex, Wrap } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import theme from "../styles/theme";
import CardWine from "./CardWine";
import MyRadioGroup from "./RadioGroup";
import Loading from "./Loading";
export default function Wines() {
  const { wines, filterByPrice } = useContext(MyContext);
  const [radioValue, setRadioValue] = useState(1);
  
  const filtered = filterByPrice(radioValue);
  console.log('radio value: ', filtered);

  if (!wines) return <Loading />;
  return (
    <Flex bg={'background'}>
      <MyRadioGroup setRadioValue={setRadioValue}/>
      <Box>
        <Box
          pt={'39.77px'}
          pb={'32px'}
          ml={{ base: '20px', lgg: '7%' }}
          color={'#262626'}>
          Produtos encontrados
        </Box>

        <Wrap justify={'center'}>
          {
            wines.map((wine) => <CardWine key={wine.id} wine={wine} />)
          }
        </Wrap>
      </Box>
    </Flex>
  );
}
