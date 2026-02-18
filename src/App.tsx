
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './provider/CartProvider';
import { Router } from './Router';
export function App() {
  

  return (
    <CartProvider>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        < GlobalStyles />
      </BrowserRouter>
    </ ThemeProvider>
    </CartProvider>
  )
}
