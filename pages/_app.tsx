import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import Provider from '../context/Provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
          <Provider>
            <Component {...pageProps} />
          </Provider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp