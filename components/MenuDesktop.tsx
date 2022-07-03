import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Circle,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { BiSearch } from 'react-icons/bi'

export default function MenuDesktop () {

  return (
    <div className={styles.desktop}>
      <Flex align={'center'} height={'88px'} bg={'white'} width={'100%'} mt={'-10px'} justifyContent={'space-between'}>
        <Flex align={'center'}>
          <Image ml={'80px'} mr={'70px'} src={'white.svg'} height={'27.77px'}/>

          <Breadcrumb separator='' color={'#555555'}>
            <BreadcrumbItem _hover={{ color: '#D14B8F' }}>
              <BreadcrumbLink href='#' fontSize={'20px'}>Clube</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem _hover={{ color: '#D14B8F' }}>
              <BreadcrumbLink isCurrentPage href='#' fontSize={'20px'}>Loja</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem _hover={{ color: '#D14B8F' }}>
              <BreadcrumbLink href='#' fontSize={'20px'}>Produtores</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem _hover={{ color: '#D14B8F' }}>
              <BreadcrumbLink href='#' fontSize={'20px'}>Ofertas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem _hover={{ color: '#D14B8F' }}>
              <BreadcrumbLink href='#' fontSize={'20px'}>Eventos</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <AvatarGroup spacing={15} mr={'70px'}>
          <Circle size='56px' borderWidth={2} borderColor={'#555555'}>
            <BiSearch fontSize={'36px'} color={'#555555'} />
          </Circle>

          <Circle size='56px' borderWidth={2} borderColor={'#555555'}>
            <Avatar boxSize={'53px'} bg='#F5F8FA' borderRadius={'100%'}/>
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
              fontSize={'12px'}
              color={'#4FBFA5'}>
              0
            </Circle>
          </Circle>
        </AvatarGroup>
      </Flex>
    </div>
  );
}
