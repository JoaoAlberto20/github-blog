import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']}
  }

  body, input {
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    font-weight: 400;
  }

`
