import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Image,
  Box,
  Circle,
  Avatar,
  AvatarGroup,
  AvatarBadge,
} from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'

export default function MenuDesktop () {
  return (
    <div className={styles.desktop}>
      <Flex align={'center'} height={'88px'} bg={'red'} width={'100%'} mt={-10} justifyContent={'space-around'}>
        <Flex align={'center'}>
          <Image ml={10} mr={40} src={'white.svg'} height={27.77}/>

          <Breadcrumb separator='' mr={70}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#' fontSize={'20px'}>Clube</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink isCurrentPage href='#' fontSize={'20px'}>Loja</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#' fontSize={'20px'}>Produtores</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#' fontSize={'20px'}>Ofertas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#' fontSize={'20px'}>Eventos</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <AvatarGroup spacing={20}>
          <Circle size='56px' borderWidth={1} borderColor={'gray'}>
            <SearchIcon />
          </Circle>

          <Circle size='56px' borderWidth={1} borderColor={'gray'}>
            <Avatar boxSize={'64px'} color='red'/>
          </Circle>

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
              fontSize={'12px'}>
              0
            </Circle>
          </Circle>
        </AvatarGroup>
      </Flex>
    </div>
  );
}
