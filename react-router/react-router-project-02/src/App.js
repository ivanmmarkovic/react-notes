import { useState } from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
  const [cartIsEmpty] = useState(true);
  return (
    <BrowserRouter>
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about/*' element={<About />} />
        <Route path='/products/:id/*' element={<ProductDetail />} />
        <Route path='/products' element={<Products />} />
        <Route path='/test' element={(
          <div>
            <h2>Test page</h2>
            <p>Hello!</p>
          </div>
        )} />
        <Route path='/redirect' element={<Navigate to="/about" />} />
        <Route path="/checkout" element={ cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
