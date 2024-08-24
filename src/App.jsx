// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// //import Navbar from "../src/components/Navbar"; // Adjust the path as needed
// import "./index.css";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Home />
//         <About />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home"; // Example of another page
import Blog from "./pages/Blog"; // Example of another page
import ContactUs from "./pages/ContactUs"; // Example of another page
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Add other routes here */}
      </Routes>
      <Layout />
    </Router>
  );
}

export default App;
