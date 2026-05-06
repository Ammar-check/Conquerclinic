import Image from "next/image";
import React from "react";

const PatientPortal = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto relative">
        <Image
          src="/images/hormoneHealth/hormon-health.png"
          fill
          alt="Reset Password"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 sm:px-10 md:px-16 py-10">
        <div className="w-full max-w-md">
          
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-medium text-center mb-6">
            Reset Password
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 leading-relaxed">
            Need to reset your password? No problem. Please enter the{" "}
            <span className="font-semibold">email address for your account</span>{" "}
            and we will send you a password reset link.
          </p>

          {/* Form */}
          <form className="space-y-6">
            
            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border-0 border-b border-black focus:outline-none focus:border-gray-700 py-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#363636] text-white py-3 common__btn text-sm tracking-wide hover:opacity-90 transition"
            >
              SEND PASSWORD RESET LINK
            </button>
          </form>

          {/* Back Link */}
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-sm  hover:underline" style={{color:"#363636"}}
            >
              Back to Login
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientPortal;