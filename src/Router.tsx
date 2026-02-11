import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/defaultLayout/DefaultLayout';
import { Cart } from './pages/Cart';

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
    )
}