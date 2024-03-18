import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Error404page from "./pages/Error404page";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Loginsignup from "./pages/LoginSignup"
import Footer from "./Components/Footer/Footer.jsx"
import kids_banner from './Components/assets/banner_kids.png'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/Women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="*" element={<Error404page />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
