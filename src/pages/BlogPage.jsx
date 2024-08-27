import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    image: "./images/blogpost1.jpg",
    title: "Finding the Perfect Fit: A Guide to Choosing the Right Headphones",
    date: "October 9, 2023",
    description:
      "Navigate the headphone market with confidence as we provide expert advice on selecting the perfect pair to suit your needs.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 2,
    image: "./images/blogpost2.jpg",
    title: "The Future of Audio Technology: Trends and Innovations to Watch",
    date: "October 9, 2023",
    description:
      "Stay ahead of the curve as we uncover the latest trends and innovations shaping the future of audio technology.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 3,
    image: "./images/blogpost3.jpg",
    title:
      "Unlocking the Potential of Wireless Audio: Freedom and Convenience Combined",
    date: "October 9, 2023",
    description:
      "Explore the benefits and possibilities of wireless audio technology, offering freedom and convenience in your audio setup.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 4,
    image: "./images/blogpost4.jpg",
    title:
      "Creating Your Personal Sound Sanctuary: Tips for Optimizing Your Listening Space",
    date: "October 9, 2023",
    description:
      "Discover practical tips and techniques for designing an optimal listening environment to fully immerse yourself in music.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 5,
    image: "./images/blogpost7.jpg",
    title:
      "Exploring the World of Hi-Res Audio: The Ultimate Listening Experience",
    date: "October 9, 2023",
    description:
      "Dive into the world of high-resolution audio and the unmatched quality it brings to your music listening sessions.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 6,
    image: "./images/blogpost8.jpg",
    title:
      "Unveiling the Secrets of Audio Engineering: Behind the Scenes at DukaanOnline",
    date: "October 9, 2023",
    description:
      "Get an exclusive glimpse into the intricate process of audio engineering and the craftsmanship behind Crescendo products.",
    buttonText: "Learn More",
    link: "#",
  },
];

const BlogPage = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="bg-white py-16">
      {/* Section: Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">DukaanOnline Blog</h1>
      </div>

      {/* Section: Our Story */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 relative">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10">
          <img
            src="./images/Blog1.jpg"
            alt="Our Story"
            className="w-full h-full rounded-lg shadow-lg mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left bg-white p-8 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-x-1/3 z-20">
          <div className="p-6">
            <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-bold mb-4">
              Guide
            </button>
            <p className="text-sm text-gray-600 mb-2">October 9, 2023</p>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              Finding the Perfect Fit: A Guide to Choosing the Right Headphones
            </h1>
            <p className="text-gray-600 mb-4">
              Navigate the headphone market with confidence as we provide expert
              advice on selecting the perfect pair to suit your needs.
            </p>
            <a
              href=""
              className="flex items-center text-blue-500 hover:underline"
            >
              <span className="text-sm font-medium">Read More</span>
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 pt-12 lg:pt-16 lg:p-12">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-2xl lg:text-3xl font-bold text-gray-800">
            DukaanOnline Blog
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            See More Articles
          </button>
        </div>

        {/* Blog Posts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt="Blog Post"
                  className="w-full h-auto transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-bold mb-4">
                  Guide
                </button>
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  {post.title}
                </h1>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="flex items-center text-blue-500 hover:underline"
                >
                  <span className="text-sm font-medium">{post.buttonText}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2A2C39] p-8 rounded-lg shadow-lg text-white mt-12 mx-auto max-w-lg ">
        {!subscribed ? (
          <>
            <h4 className="text-2xl font-bold mb-4 text-center">
              Stay in the LOOP
            </h4>
            <div className="text-center mb-4">
              <h6 className="text-lg">
                Subscribe to Our Newsletter for Exclusive Updates and Offers
              </h6>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-auto p-2 rounded-md text-gray-900 flex-grow sm:flex-grow-0"
                style={{ maxWidth: "300px" }}
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
            <p className="text-lg">
              You've successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
