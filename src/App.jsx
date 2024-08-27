import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home"; // Example of another page
import Blog from "./components/Blog"; // Example of another page
import ContactUs from "./pages/ContactUs"; // Example of another page
import Layout from "./layouts/Layout";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogpage" element={<BlogPage />} />
        {/* Add other routes here */}
      </Routes>
      <Layout />
    </Router>
  );
}

export default App;
