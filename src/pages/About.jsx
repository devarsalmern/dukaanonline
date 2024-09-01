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
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="bg-white py-8 sm:py-16 px-4 sm:px-0">
        {/* Section: Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Dukaan Online
          </h1>
        </div>

        {/* Section: Our Story */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 relative">
          <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-0">
            <img
              src="./images/about.jpg"
              alt="Our Story"
              className="w-full sm:w-3/4 h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg relative lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/3 lg:max-w-[75%]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
        <div className="container mx-auto mt-12 sm:mt-16">
          <div className="p-6 sm:p-8 bg-gray-50 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
              Achievements
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                { title: "Years of Experience", value: "20+" },
                { title: "Audio Products", value: "100+" },
                { title: "Industry Awards", value: "10+" },
                { title: "Community Members", value: "100k+" },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
                    {achievement.value}
                  </h1>
                  <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
                    {achievement.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Our Values */}
        <div className="container mx-auto mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
                className="p-4 sm:p-6 bg-white rounded-lg shadow-lg flex items-start space-x-2 sm:space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <FontAwesomeIcon
                  icon={value.icon}
                  className="text-2xl sm:text-3xl"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/products">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#406BCF] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                See Our Products
              </button>
            </Link>
          </div>
        </div>
        <FeaturesOfSite />
      </div>
    </div>
  );
};

export default About;
