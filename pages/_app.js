import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import { useState, useEffect } from "react"
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig"
import Layout from '../Layout';
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  const currentTheme = theme ==='light' ? lightTheme : darkTheme

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
          <Component {...pageProps} currentTheme={currentTheme} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
