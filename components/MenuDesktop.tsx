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
      <Flex align={'center'}>
        <Image ml={10} mr={40} src={'white.svg'} height={27}/>

        <Breadcrumb separator='' mr={70}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={'12px'}>Clube</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage href='#' fontSize={'12px'}>Loja</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={'12px'}>Produtores</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={'12px'}>Ofertas</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={'12px'}>Eventos</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <AvatarGroup spacing={20}>
          <Circle size='44px' borderWidth={1} borderColor={'gray'}>
            <SearchIcon />
          </Circle>

          <Circle size='44px' borderWidth={1} borderColor={'gray'}>
            <Avatar boxSize={45} color='red'/>
          </Circle>

          <Circle bg={'#F6B554'} size='44px'>
            <Image boxSize={'45px'} src={'Bitmap.svg'} borderBottomRadius={'100%'} position={'absolute'}/>
            <Circle position={'absolute'} borderColor='black' mt={'32px'} ml={'32px'} size='1.5em' bg='white' borderRadius={'100%'} fontSize={'12px'}>
              0
            </Circle>
          </Circle>
        </AvatarGroup>
      </Flex>
    </div>
  );
}
