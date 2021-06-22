import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import { useState, useEffect } from "react"
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig"
import Layout from '../Layout';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch {theme}</button>
      <Layout>
        <Component {...pageProps} theme={theme} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
