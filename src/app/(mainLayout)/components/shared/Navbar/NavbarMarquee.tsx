import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaCheckCircle, FaHeartbeat, FaStar, FaStethoscope, FaUserMd } from 'react-icons/fa';

const NavbarMarquee = () => {
  return (
    <div className="py-2 text-white shadow-sm bg-primary_color">
      <Marquee
        pauseOnHover={false} // Keep the marquee running even on hover
        loop={1000000000} // Ensure continuous looping
        speed={65} // Adjust speed as needed
      >
     

  <div className="flex gap-5 justify-center items-center">
        <FaStethoscope className="mx-2" />
        <h2 className="flex justify-center items-center">Expert Care, Personalized Approach <FaCheckCircle className="mx-2" /></h2>
        <p className="flex justify-center items-center">Advanced Treatments, Cutting-Edge Technology <FaStar className="mx-2" /></p>
        <button className="flex justify-center items-center">Book Your Appointment Now</button>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <FaHeartbeat className="mx-2" />
        <h2 className="flex justify-center items-center">Your Health, Our Priority <FaStar className="mx-2" /></h2>
        <p className="flex justify-center items-center">Preventive Care, Early Detection <FaCheckCircle className="mx-2" /></p>
        <button className="flex justify-center items-center">Schedule a Consultation</button>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <FaUserMd className="mx-2" />
        <h2 className="flex justify-center items-center">Compassionate Care, Every Step of the Way <FaCheckCircle className="mx-2" /></h2>
        <p className="flex justify-center items-center">Dedicated to Your Well-being <FaStar className="mx-2" /></p>
        <button className="flex justify-center items-center">Contact Us Today</button>
      </div>


      </Marquee>
    </div>
  );
};

export default NavbarMarquee;