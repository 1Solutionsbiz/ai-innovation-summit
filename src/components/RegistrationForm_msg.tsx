import React from "react";
import { Link } from "react-router-dom";

const RegistrationFormClosed: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-2xl text-center bg-gray-800 p-10 rounded-2xl shadow-xl">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Registrations Open Soon
        </h1>

        {/* <p className="text-gray-300 mb-6 leading-relaxed">
          Thank you for your interest in the AI Innovation Summit.  
          Registrations for this event are now closed.
        </p> */}

        {/* <p className="text-gray-400 text-sm mb-8">
          Please stay tuned for updates on upcoming editions and future events.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
        >
          Go Back to Home
        </Link> */}
      </div>
    </section>
  );
};

export default RegistrationFormClosed;
