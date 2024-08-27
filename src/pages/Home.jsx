import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the path as needed
// import "./index.css";
import HeroCard from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Category from "../components/Category";
import FeaturesOfSite from "../components/FeaturesOfSite";
import WhyUs from "../components/WhyUs";
import Subscribe from "../components/Subscribe";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroCard />
      <FeaturedProducts />
      <Category />
      <FeaturesOfSite />
      <WhyUs />
      <Subscribe />
      <Blog />
    </>
  );
}

export default Home;
