import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  color,
} from '@chakra-ui/react'

export default function MenuContentMobile () {
  return (
    <Accordion defaultIndex={[0]} bg={'#F5F8FA'} color={'#D14B8F'} allowMultiple pr={'20px'} pl={'20px'} pt={'20px'} width={'280px'}>
      <AccordionItem>
        <h2>
          <AccordionButton width={'100%'} height={'60px'}>
            <Box flex='1' textAlign='left'>
              CLUBE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton height={'60px'}>
            <Box flex='1' textAlign='left'>
              LOJA
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton height={'60px'}>
            <Box flex='1' textAlign='left'>
              BAIXE O APP
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton height={'60px'}>
            <Box flex='1' textAlign='left'>
              CENTRAL DE AJUDA
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}