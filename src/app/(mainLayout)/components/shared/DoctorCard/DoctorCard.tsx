import Image from "next/image";
import React from "react";

const DoctorCard = () => {
  return (
    <div className="max-w-sm  overflow-hidden  text-center p-4 rounded-2xl">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="w-full"
          src="https://medito-react.vercel.app/static/media/team-2-1.6f24e56aa08ae149c731.png"
          alt="Saint Martin's Island"
        />
        <span className=" absolute top-2 right-2 bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
            DHMS
          </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 rancho-regular">
          Dr. Pauline W. Hamilton
        </div>
        <p className="text-gray-700 text-base">
          FCPS (Medicine), FACP (USA)Professor & Head of Department(Ex.)Medicine
          Specialist
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
