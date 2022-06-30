import React from "react";
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
} from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'

export default function MenuDesktop () {
  return (
    <div className={styles.desktop}>
      <Box mr={40}>WINE</Box>

      <Breadcrumb separator='' mr={40}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Clube</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage href='#'>Loja</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Produtores</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Produtores</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Ofertas</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Eventos</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AvatarGroup spacing={20}>
        <Circle size='40px' borderWidth={1} borderColor={'gray'}>
          <SearchIcon />
        </Circle>
        <Circle size='40px' borderWidth={1} borderColor={'gray'}>
          <Avatar boxSize={40} color='red'/>
        </Circle>
        <Circle size='40px' borderWidth={1} borderColor={'gray'}>
          <Avatar boxSize={40}>
            <AvatarBadge borderColor='black' boxSize='1.5em' bg='red' borderRadius={'100%'} >
              0
            </AvatarBadge>
          </Avatar>
        </Circle>
      </AvatarGroup>
    </div>
  );
}
