// import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp