import { background, Box, color, Flex, Wrap } from "@chakra-ui/react";
import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import theme from "../styles/theme";
import CardWine from "./CardWine";
import MyRadioGroup from "./RadioGroup";

export default function Wines() {
  const { wines } = useContext(MyContext);
  return (
    <Flex bg={'background'}>
      <MyRadioGroup/>
      <Box>
        <Box
          pt={'39.77px'}
          pb={'32px'}
          ml={{ base: '20px', lgg: '15%' }}
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
