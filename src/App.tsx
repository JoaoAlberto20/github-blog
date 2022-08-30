import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { DefaultThemes } from './styles/Themes/DefaultThemes'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <GlobalStyles />
      <h1>Olá world</h1>
    </ThemeProvider>
  )
}
