import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/menubar';
import ProductDetails from './components/productdetail';
import Cart from './components/cart';


function App() {
  return (

    <div className="App" style={{ backgroundColor: '#f5f5f5' }}>
      <Router>
        <Menubar />
        <Routes>
          <Route exact path='/' element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
