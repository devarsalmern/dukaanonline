import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const FindUs = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapLoaded = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: center,
          zoom: 10,
        });

        // Creating the AdvancedMarkerElement
        const advancedMarkerElement =
          new google.maps.marker.AdvancedMarkerElement({
            position: center,
            map: map,
          });
      }
    };

    // Check if the Google Maps script has loaded
    if (window.google && window.google.maps) {
      mapLoaded();
    } else {
      window.initMap = mapLoaded;
    }
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <div ref={mapRef} style={containerStyle}></div>
            <div className="absolute top-0 left-0 p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Our Location</h2>
              <p className="mt-2">1234 Main Street, Anytown, USA</p>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Find Us</h1>
            <p className="text-gray-700 mb-4">
              We are located at 1234 Main Street, Anytown, USA. Feel free to
              visit us or contact us for more information.
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
              <p className="text-gray-700 mb-1">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> contact@devarsal.com
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
              <ul className="text-gray-700">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
