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
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'


export default function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() as any;

  return (
    <div className={styles.mobile}>
      <Flex alignItems='center' justifyContent='space-around' justifyItems={'center'}>
        <>
          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Box mr={40}>WINE</Box>
        </>

        <>
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
            <Circle size='40px' borderWidth={1} borderColor={'gray'}>
              <SearchIcon />
            </Circle>
            <Circle size='40px' borderWidth={1} borderColor={'gray'}>
              <Avatar boxSize={40}>
                <AvatarBadge borderColor='black' boxSize='1.5em' bg='red' borderRadius={'100%'} >
                  0
                </AvatarBadge>
              </Avatar>
            </Circle>
          </AvatarGroup>
        </>
      </Flex>
    </div>
  )
}
