
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { ListCoffees } from './components/ListCoffees'
import { coffeeData } from './mocks/coffeeData'
export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <ListCoffees coffees={coffeeData} />
      < GlobalStyles />
    </ ThemeProvider>
  )
}
