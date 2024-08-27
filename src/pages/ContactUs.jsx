import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from "react-icons/fa";

const ContactUs = () => {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual submission logic)
    setStatus("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle card expansion
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Sample data for stores
  const stores = [
    {
      region: "Central Region",
      name: "Serenity Square",
      address: "1234 Ipsum Way, Lorem City, ZZ 00000",
      hours: "Mon-Fri 11:00-21:00",
      phone: "+92-309-3577051",
    },
    {
      region: "North Region",
      name: "Tranquil Plaza",
      address: "5678 Dolor Ave, Sit City, ZZ 00000",
      hours: "Mon-Fri 10:00-20:00",
      phone: "+92-300-1234567",
    },
    {
      region: "South Region",
      name: "Peaceful Mall",
      address: "91011 Amet Rd, Consectetur City, ZZ 00000",
      hours: "Mon-Fri 12:00-22:00",
      phone: "+92-321-7654321",
    },
    {
      region: "West Region",
      name: "Harmony Center",
      address: "1213 Elit St, Adipiscing City, ZZ 00000",
      hours: "Mon-Fri 09:00-19:00",
      phone: "+92-333-9876543",
    },
  ];
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };
  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer:
        "Donec semper lobortis ornare. Etiam eu metus sagittis metus maximus lacinia. Fusce eleifend venenatis lorem sed consectetur.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Donec semper lobortis ornare. Etiam eu metus sagittis metus maximus lacinia. Fusce eleifend venenatis lorem sed consectetur.",
    },
    {
      question: "Is international shipping available?",
      answer:
        "Donec semper lobortis ornare. Etiam eu metus sagittis metus maximus lacinia. Fusce eleifend venenatis lorem sed consectetur.",
    },
    {
      question: "Can I track the status of my order?",
      answer:
        "Donec semper lobortis ornare. Etiam eu metus sagittis metus maximus lacinia. Fusce eleifend venenatis lorem sed consectetur.",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us A Message
            </h4>
            <form onSubmit={handleSubmit}>
              {/* Name and Email on the same line */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject on the same line */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Message on its own line */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
              {status && (
                <p className="mt-4 text-green-600 font-semibold">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <FaPhoneAlt className="text-blue-500 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Call Center
                </h4>
                <h6 className="text-gray-600">+92-309-3577051</h6>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <FaEnvelope className="text-blue-500 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Email Support
                </h4>
                <h6 className="text-gray-600">support@gmail.com</h6>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Location
                </h4>
                <h6 className="text-gray-600">Johar Town, Lahore</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-16 px-8">
          <h3 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Find a Store Near You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {stores.map((store, index) => (
              <div
                key={index}
                className="bg-[#F7F8FF] p-6 rounded-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h4 className="text-xl font-semibold  text-[#406BCF]">
                    {store.region}
                  </h4>
                  <span className="text-[#406BCF]">
                    {expandedCard === index ? (
                      <FaChevronUp className="text-2xl" />
                    ) : (
                      <FaChevronDown className="text-2xl" />
                    )}
                  </span>
                </button>

                {expandedCard === index && (
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-black">
                      {store.name}
                    </h4>
                    <p className="text-black">{store.address}</p>
                    <button className="text-blue-500 mt-2 mb-4">
                      Open Map
                    </button>
                    <p className="text-black">Hours: {store.hours}</p>
                    <p className="text-black">Phone: {store.phone}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto py-16 px-8">
          <h4 className="text-4xl font-semibold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h5 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h5>
                  <span className="text-gray-500">
                    {expandedFAQ === index ? (
                      <FaMinus className="text-xl" />
                    ) : (
                      <FaPlus className="text-xl" />
                    )}
                  </span>
                </button>

                {expandedFAQ === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
