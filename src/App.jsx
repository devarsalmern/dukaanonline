import { BrowserRouter as Router } from "react-router-dom";
//import Navbar from "../src/components/Navbar"; // Adjust the path as needed
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
