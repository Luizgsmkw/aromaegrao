
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { Home } from './pages/Home'
export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      < GlobalStyles />
    </ ThemeProvider>
  )
}
