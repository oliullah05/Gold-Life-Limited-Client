import Image from "next/image";
import React from "react";

const DoctorCard = () => {
  return (
    <div className="max-w-sm  overflow-hidden  text-center p-4 rounded-2xl">
      <div className="relative  border w-64 h-64 flex mx-auto items-center justify-center">
        {/* Background shape at the bottom */}
        <div className=" rotate-[-68deg]  absolute border  bottom-0 bg-blue-5 rounded-full h-[15rem] w-[15rem] -z-10">
          <div
            style={{
              background: "conic-gradient(#fff 135deg, #076CEC 135deg) ",
            }}
            className="  absolute  bottom-0 bg-blue-500 rounded-full h-[15rem] w-[15rem] -z-10"
          ></div>
        </div>

        {/* Image of the doctor */}
        <Image
          src={
            "https://medito-react.vercel.app/static/media/team-2-1.6f24e56aa08ae149c731.png"
          }
          alt="Doctor"
          className="relative  pb-5 rounded-full"
          width={192} // Adjust width and height based on your needs
          height={192}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 rancho-regular">
          Dr. Pauline W. Hamilton
        </div>
        <p className="text-gray-700 text-sm">
          FCPS (Medicine), FACP (USA)Professor & Head of Department(Ex.)Medicine
          Specialist
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 flex items-center justify-center"></div>
    </div>
  );
};

export default DoctorCard;



















// <div className="relative border  w-[22rem] h-[22rem] flex mx-auto items-center justify-center">
//         {/* Background shape at the bottom */}
//         <div className="
//           rotate-[-68deg] border
//             border-red-500  justify-center 
//          items-center absolute   bottom-0 bg-blue-5 h-72 w-72    -z-10">
//             <div
//             style={{  
//               background: "conic-gradient(#fff 135deg, #076CEC 135deg) ",
//             }}
//             className="  absolute  bottom-0 bg-blue-500 
//             rounded-full h-[21rem] w-[21rem] -z-10"
//           ></div>
//         </div>

//         {/* Image of the doctor */}
//         <Image 
//           src={
//             "https://medito-react.vercel.app/static/media/team-2-1.6f24e56aa08ae149c731.png"
//           }   
//           alt="Doctor"  
//           className="relative hiden h-92 w-[17rem] pb-5 rounded-full"
//           width={200} // Adjust width and height based on your needs
//           height={200}
//         />
//       </div>