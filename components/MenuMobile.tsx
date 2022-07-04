import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Box,
  Circle,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'
import MenuMobileContent from './MenuMobileContent'

export default function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() as any;

  return (
    <div className={styles.mobile}>
      <Flex height={'72px'} align={'center'} bg={'white'} width={'100%'} mt={-10} pr={'16px'} justifyContent={'space-between'}>

        <Flex align={'center'} ml={'18.75px'}>
          <Button ref={btnRef} bg={'white'} mr={'27px'} onClick={onOpen}>
            <HamburgerIcon boxSize={'25px'}/>
          </Button>

          <Image mr={100} src={'white.svg'} height={'19px'}/>
        </Flex>

        <>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay bg={'#F5F8FA'} width={'280px'}/>
            <DrawerContent bg={'#F5F8FA'} alignItems={'start'}>
              <DrawerCloseButton alignSelf={'start'} mt={'20px'} ml={'245px'} color={'black'}/>

              <DrawerHeader display={'flex'} bg={'#F5F8FA'} alignItems={'center'} position={'relative'} mt={'-10px'} ml={'20px'}>
                <Avatar boxSize={'56px'} bg={'gray'} borderRadius={'100%'} mr={'20px'} />
                <Box>
                  <Box color={'gray'}>Acesse sua conta</Box>
                  <Box color={'#D14B8F'} pt={'10px'}>Entrar</Box>
                </Box>
              </DrawerHeader>

              <DrawerBody>
                <MenuMobileContent/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
        <AvatarGroup spacing={25}>
          <SearchIcon boxSize='26px' color={'gray'}/>
          <Circle bg={'#F6B554'} size='56px'>
            <Image boxSize={'55px'} src={'Bitmap.svg'} borderBottomRadius={'100%'} position={'absolute'}/>
              <Circle
                position={'absolute'}
                borderColor='black'
                mt={'36px'}
                ml={'36px'}
                size='2em'
                bg='white'
                borderRadius={'100%'}
                fontSize={'12px'}
                color={'#4FBFA5'}>
                0
              </Circle>
          </Circle>
        </AvatarGroup>
      </Flex>
    </div>
  )
}
