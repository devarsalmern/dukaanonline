import { useState } from "react";
const Loop = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
    }
  };
  return (
    <>
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
    </>
  );
};

export default Loop;
