import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    <section
      className="text-white flex justify-center items-center"
      style={{
        minHeight: "80vh",
        padding: "2rem",
      }}
    >
      <div
        className="bg-gray-800 p-6 sm:p-9 rounded-3xl shadow-lg w-full max-w-4xl lg:max-w-7xl xl:max-w-8xl flex flex-col lg:flex-row text-lg text-center lg:text-left"
        style={{ background: "linear-gradient(to right, #3A5AA4, #072564)" }}
      >
        <div className="lg:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Elevate Your Audio Journey Today
          </h2>
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            Experience the Future of Audio
          </h4>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-x-4 sm:space-y-0">
            <Link to="/shopNow">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 sm:py-3 px-4 sm:px-5 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Shop Now
              </button>
            </Link>
            <Link to="/aboutUs">
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 sm:py-3 px-4 sm:px-5 rounded hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
