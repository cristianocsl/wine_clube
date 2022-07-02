import { Box, Flex, Wrap } from "@chakra-ui/react";
import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import CardWine from "./CardWine";
import { WinesType } from "../services/typing";

export default function Wines() {
  const { wines } = useContext(MyContext);

  return (
    <Box>
        <Box
          pt={'39.77px'}
          pb={'32px'}
        >Produtos encontrados</Box>
      <Wrap justify={'center'}>
        {
          wines.map((wine) => <CardWine key={wine.id} wine={wine} />)
        }
      </Wrap>
    </Box>
  );
}
