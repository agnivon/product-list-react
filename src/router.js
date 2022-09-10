import App from './containers/App';
import Home from './containers/Home';
import ProductDetails from './containers/ProductDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="product/:id" element={<ProductDetails />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;