import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#fefefe',
  text: '#363537',
  subtext: '#707070',
  secondary: '#d7f7f5',
  tertiary: '#75cac3',
  accent: '#ff6768',
  boxShadow: '0px 2px 10px -2px rgba(134, 134, 134, 0.5)',
  contrastText: '#FAFAFA',
  footerColor: '#F0F0F0',
}

export const darkTheme = {
  body: '#17223b',
  text: '#FAFAFA',
  subtext: '#D0D0D0',
  secondary: '#263859',
  tertiary: '#A2AAB9',
  accent: '#ffc7c8',
  boxShadow: '0px 2px 10px -2px rgba(51, 51, 51, 0.5)',
  contrastText: '#101010',
  footerColor: '#16161D'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }
`