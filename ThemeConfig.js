import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#fefefe',
  text: '#363537',
  secondary: '#d7f7f5',
  tertiary: '#75cac3',
  accent: '#ff6768'
}

export const darkTheme = {
  body: '#17223b',
  text: '#FAFAFA',
  secondary: '#263859',
  tertiary: '#6b778d',
  accent: '#ffc7c8'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }
`