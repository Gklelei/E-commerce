import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Error404page from "./pages/Error404page";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Loginsignup from "./pages/LoginSignup"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCategory />} category="Men" />
          <Route path="/Women" element={<ShopCategory />} category="Women" />
          <Route path="/Kids" element={<ShopCategory />} category="Kid" />
          <Route path="*" element={<Error404page />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
