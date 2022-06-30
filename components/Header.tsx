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
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <Flex mt={10} alignItems='center'>
      <MenuMobile />
      <MenuDesktop />
    </Flex>
  )
}
