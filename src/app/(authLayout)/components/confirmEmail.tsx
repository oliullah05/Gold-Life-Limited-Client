"use client";

import animationData from "@/app/(authLayout)/assets/email-confirmation.json";
import { useRouter } from "next/navigation"; // Import useRouter
import { ReactNode, useCallback } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export const lottieDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ConfirmEmail = ({ children, email,title,description }: { children: ReactNode; email: string,title:string,description:string}) => {
  const router = useRouter(); 

  const handleLoginClick = useCallback(() => {
    router.replace("/login");
    setTimeout(() => {
      window.location.reload();
    }, 400); // Set a small delay to allow the navigation to complete
  }, [router]);

  const handleRegisterClick = useCallback(() => {
    router.replace("/register");
    setTimeout(() => {
      window.location.reload();
    }, 400); // Set a small delay to allow the navigation to complete
  }, [router]);

  
  return (
    <div className="min-h-screen py-4 md:py-0 bg-blue-50 flex items-center justify-center px-4">
      <div className= " animate-flyIn bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Illustration Section */}
        <div className=" max-h-[15rem] sm:max-h-full md:w-1/2 bg-blue-100 flex items-center justify-center md:p-8">
          {children}
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-3 md:p-8 flex gap- flex-col justify-center">
          <h2 className=" text-2xl sm:text-3xl  font-bold text-blue-600">
            {title}
          </h2>

          <p className="mt-4 text-gray-600">
            We have sent an email to{" "}
            <span className="font-bold text-blue-600">{email}</span>{" "}
            for verification. {description}
          </p>

          <div className=" mt-2 md:mt-6 flex space-x-4">
            <span
              className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={handleLoginClick}
            >
              <FaSignInAlt className="mr-2" />
              Login
            </span>
            <span
              className="flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-blue-600 hover:to-indigo-600 transition duration-300 cursor-pointer"
              onClick={handleRegisterClick}
            >
              <FaUserPlus className="mr-2" />
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
