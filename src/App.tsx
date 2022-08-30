import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { DefaultThemes } from './styles/Themes/DefaultThemes'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <BlogProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogProvider>
    </ThemeProvider>
  )
}
