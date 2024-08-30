import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Layout from "./layouts/Layout";
import BlogPage from "./pages/BlogPage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/CheckOut";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Add the new route */}
          {/* Add other routes here */}
        </Routes>
        <Layout />
      </CartProvider>
    </Router>
  );
}

export default App;
