import 'styled-components'
import { DefaultThemes } from '../styles/Themes/DefaultThemes'

type ThemeTypes = typeof DefaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
