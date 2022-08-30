import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { DefaultThemes } from './styles/Themes/DefaultThemes'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
