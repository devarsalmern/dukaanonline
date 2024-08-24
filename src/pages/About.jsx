import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeadphones,
  faTrophy,
  faBolt,
  faLightbulb,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import FeaturesOfSite from "../components/FeaturesOfSite";

const About = () => {
  return (
    <div className="bg-white py-16">
      {/* Section: Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Dukaan Online</h1>
      </div>

      {/* Section: Our Story */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 relative">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10">
          <img
            src="./images/about.jpg"
            alt="Our Story"
            className="w-3/4 h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left bg-white p-8 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-x-1/3 z-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices tristique mauris, quis ultrices urna tempus et. Donec
            hendrerit porttitor venenatis. Sed quis tempor nulla. Vivamus
            fringilla elit eu felis iaculis cursus. Integer ullamcorper libero
            vel orci tristique, in ullamcorper est luctus. Proin in ligula
            felis. Proin interdum velit quam, ut iaculis ipsum tempor nec.
          </p>
        </div>
      </div>

      {/* Section: Achievements */}
      <div className="container mx-auto mt-16">
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-blue-500">20+</h1>
              <h4 className="text-gray-700 mt-2">Years of Experience</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-blue-500">100+</h1>
              <h4 className="text-gray-700 mt-2">Audio Products</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-blue-500">10+</h1>
              <h4 className="text-gray-700 mt-2">Industry Awards</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-blue-500">100k+</h1>
              <h4 className="text-gray-700 mt-2">Community Members</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Our Values */}
      <div className="container mx-auto mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quality",
              description:
                "Uncompromising commitment to superior sound, design, and durability in our audio products.",
              icon: faCheckCircle,
            },
            {
              title: "Customer Satisfaction",
              description:
                "Going the extra mile to provide exceptional service, support, and personalized experiences that leave our customers delighted.",
              icon: faHeadphones,
            },
            {
              title: "Passion for Sound",
              description:
                "Fueled by our deep appreciation for the profound impact of audio, we create products that ignite passion and elevate everyday moments.",
              icon: faBolt,
            },
            {
              title: "Innovation",
              description:
                "Constantly pushing the boundaries of audio technology to deliver cutting-edge features and immersive experiences.",
              icon: faLightbulb,
            },
            {
              title: "Design Excellence",
              description:
                "Meticulously crafting audio products that seamlessly blend captivating aesthetics with exceptional performance.",
              icon: faTrophy,
            },
            {
              title: "Sustainability",
              description:
                "Guided by a commitment to environmental stewardship, we prioritize eco-friendly practices throughout our operations.",
              icon: faLeaf,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex items-start space-x-4"
            >
              <FontAwesomeIcon icon={value.icon} className=" text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products">
            <button className="px-6 py-3 bg-[#406BCF] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              See Our Products
            </button>
          </Link>
        </div>
      </div>
      <FeaturesOfSite />
    </div>
  );
};

export default About;
