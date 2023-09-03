import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="category/:type" element={<Categories />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
