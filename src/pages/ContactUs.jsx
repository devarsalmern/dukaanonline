import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
      </div>
    </>
  );
};

export default ContactUs;
