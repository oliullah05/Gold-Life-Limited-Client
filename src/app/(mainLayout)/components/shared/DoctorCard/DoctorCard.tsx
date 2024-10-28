import Image from "next/image";
import React from "react";

const DoctorCard = () => {
  return ( 
    <div className="max-w-[26rem]   overflow-hidden  text-center p-4 rounded-2xl">
        
<div className="relative  border border-blue-500  w-full aspect-square mx-auto 
          ">
  {/* Background image */}   
  <div className="absolute top-5 border border-red-600 h-full 
   inset-1 -bottom-16 flex  justify-between flex-col-reverse">
 <div className="flex justify-between ">
 <div>jhadi</div>    
    <Image 
      src="data:image/png;base64,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" // Set the correct path for the background image
      layout="fill"     
      objectFit="cover"  
      className="object-cover  max-h-80  rounded-full" // Removed -bottom-10 for a full coverage
      alt="Background"
    />
 </div>
  </div>

  {/* Content goes here */}
  <Image  
    style={{display :""}}
    src="https://medito-react.vercel.app/static/media/team-2-2.88d011a0c7312dd16a33.png"
    alt="Doctor"
    className="relative mx-auto max-h-96 rounded-full z-10" // z-10 ensures the image is above the background
    layout="responsive"
    width={100}
    height={100}
  />
</div>


     {/* <div className="relative border w-full aspect-square mx-auto flex items-center justify-center">

  <Image
    src="data:image/png;base64,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" // Replace with your background image URL
    alt="Background"
    className="absolute object-cover   bg-red-600 inset-0  max-h-48 bottom-0 h-max rounded-full"
    layout="fill"
  />
  
  
  <Image  
    src="https://medito-react.vercel.app/static/media/team-2-2.88d011a0c7312dd16a33.png"
    alt="Doctor"
    className="relative max-h-80 rounded-full z-10" // z-10 ensures the image is above the background
    layout="responsive"
    width={100}
    height={100}
  />
</div> */}

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


<div className="relative border w-full aspect-square mx-auto flex items-center justify-center">
  {/* Background image */}
  <Image
    src={'data:image/png;base64,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'} // Replace with your background image URL
    alt="Background"
    className="absolute border inset-0 max-h-80 object-cover rounded-full"
    layout="fill"
    style={{ bottom: '0' }} // Ensures the image is anchored to the bottom
  />
       
  {/* Image of the doctor */}  
  <Image  
  style={{'display' :'none'}}
    src="https://medito-react.vercel.app/static/media/team-2-2.88d011a0c7312dd16a33.png"
    alt="Doctor"
    className="relative max-h-96   rounded-full z-10" // z-10 ensures the image is above the background
    layout="responsive"
    width={100}
    height={100}
  />
</div>








// import Image from "next/image";
// import React from "react";

// const DoctorCard = () => {
//   return (
//     <div className="max-w-sm  overflow-hidden  text-center p-4 rounded-2xl">
//       <div className="relative  border w-64 h-64 flex mx-auto items-center justify-center">
//         {/* Background shape at the bottom */}
//         <div className=" rotate-[-68deg]  absolute border  bottom-0 bg-blue-5 rounded-full h-[15rem] w-[15rem] -z-10">
//           <div
//             style={{
//               background: "conic-gradient(#fff 135deg, #076CEC 135deg) ",
//             }}
//             className="  absolute  bottom-0 bg-blue-500 rounded-full h-[15rem] w-[15rem] -z-10"
//           ></div>
//         </div>

//         {/* Image of the doctor */}
//         <Image
//           src={
//             "https://medito-react.vercel.app/static/media/team-2-1.6f24e56aa08ae149c731.png"
//           }
//           alt="Doctor"
//           className="relative  pb-5 rounded-full"
//           width={192} // Adjust width and height based on your needs
//           height={192}
//         />
//       </div>
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 rancho-regular">
//           Dr. Pauline W. Hamilton
//         </div>
//         <p className="text-gray-700 text-sm">
//           FCPS (Medicine), FACP (USA)Professor & Head of Department(Ex.)Medicine
//           Specialist
//         </p>
//       </div>

//       <div className="px-6 pt-4 pb-2 flex items-center justify-center"></div>
//     </div>
//   );
// };

// export default DoctorCard;



















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