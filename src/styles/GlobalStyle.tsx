import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}  

  * {
    box-sizing: border-box;
    transition: background-color .5s;
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 50px 0 0 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
