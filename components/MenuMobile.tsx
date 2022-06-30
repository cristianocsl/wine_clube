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

export default function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() as any;

  return (
    <div className={styles.mobile}>
      <Flex ml={'-1em'} align={'center'}>
        <Button ref={btnRef} colorScheme='teal' mr={'27px'} onClick={onOpen}>
          <HamburgerIcon boxSize={'27px'}/>
        </Button>
        <Image mr={100} src={'white.svg'} height={'22px'}/>

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <AvatarGroup spacing={20}>
          <SearchIcon boxSize='26px' color={'gray'}/>
          <Circle bg={'#F6B554'} size='56px'>
            <Image boxSize={'55px'} src={'Bitmap.svg'} borderBottomRadius={'100%'} position={'absolute'}/>
              <Circle position={'absolute'} borderColor='black' mt={'32px'} ml={'32px'} size='1.5em' bg='white' borderRadius={'100%'} >
                0
              </Circle>
          </Circle>
        </AvatarGroup>
      </Flex>
    </div>
  )
}
