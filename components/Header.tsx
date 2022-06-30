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
import { SearchIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <Flex>
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
            <AvatarBadge boxSize={40} bg='green' />
          </Avatar>
        </Circle>
      </AvatarGroup>
    </Flex>
  )
}
