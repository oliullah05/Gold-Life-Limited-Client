import Image from "next/image";

const shapeBg =
  "https://medito-react.vercel.app/static/media/shape-1-1.ddec43f457987af2e084.png";
const doctorImg =
  "https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-blue-50 py-12 px-4 md:px-8 lg:px-16 xl:px-24 min-h-screen flex items-stretch">
      {/* Background image as an overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={shapeBg}
          alt="Background"
          fill
          quality={100}
          className="opacity-100 object-cover"
        />
      </div>

      <div className="primary-container flex justify-center mx-auto lg:flex-row items-stretch relative z-10 w-full">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center  text-center lg:text-left h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary_color leading-tight">
            Expert Dental Care For your Bright Smile
          </h1>
          <p className=" text-sm my-5 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start items-center space-x-4">
            <button className="bg-blue-600 py-4 text-white font-semibold  px-4 rounded-lg hover:bg-blue-700 transition">
              Discover More
            </button>
            <button className="flex  items-center text-blue-600 font-semibold">
            <div className="  flex items-center justify-center p-3 rounded-full">
              <div className="playButtonAnimation">
                <div className="w-[3.5rem] h-[3.2rem]  rounded-full bg-white border  flex justify-center items-center relative z-30">
                  <svg       
                    className="w-5  h-5 z-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"   
                  >
                    <path d="M7 6v12l10-6-10-6z" />
                  </svg>
                </div>
              </div>
            </div>
              <span className="ml-2 text-underLine-animation">Watch Now</span>
            </button>
          
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center lg:justify-end gap-4 lg:gap-6 flex-wrap h-full">
          <div className="relative">
            <Image
              src={doctorImg}
              alt="Doctor"
              width={180}
              height={180}
              className="rounded-full ring-4 ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Image
              src={doctorImg}
              alt="Patient 1"
              width={200}
              height={130}
              className="rounded-lg shadow-lg"
            />
            {/* <Image src={doctorImg} alt="Patient 2" width={200} height={130} className="rounded-lg shadow-lg" /> */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.28 0 4.124-1.658 4.124-3.703 0-2.044-1.844-3.702-4.124-3.702S7.876 6.253 7.876 8.297C7.876 10.342 9.72 12 12 12zm0 2c-3.532 0-7.106 1.67-7.106 5v1h14.212v-1c0-3.33-3.574-5-7.106-5z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">200+</p>
              <p className="text-gray-500">World’s Top Doctors Consultation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from 'next/image';

// const shapeBg = 'https://medito-react.vercel.app/static/media/shape-1-1.ddec43f457987af2e084.png';
// const doctorImg = 'https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full bg-blue-50 py-12 px-4 md:px-8 lg:px-16 xl:px-24">
//       {/* Background image as an overlay */}

//         <div className="absolute inset-0 z-0">
//           <Image
//             src={shapeBg}
//             alt="Background"
//             fill
//             objectFit=""
//             quality={100}
//             className="opacity-100 border border-red-600 object-cover"
//           />
//         </div>

//       <div className="primary-container justify-center  mx-auto flex flex-col lg:flex-row items-center lg:items-start relative z-10">
//         {/* Text Section */}
//         <div className="flex-1 bg-red-500 min-h-full lg:pr-8 items-center border text-center lg:text-left mb-8 lg:mb-0">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
//             Expert Dental Care For your Bright Smile
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
//           <div className="mt-8 flex justify-center lg:justify-start items-center space-x-4">
//             <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//               Discover More
//             </button>
//             <button className="flex items-center text-blue-600 font-semibold">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M7 6v12l10-6-10-6z" />
//                 </svg>
//               </div>
//               <span className="ml-2">Watch Now</span>
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-center items-center bg-red-600 lg:justify-end gap-4 lg:gap-6 flex-wrap">
//           <div className="relative">
//             <Image src={doctorImg} alt="Doctor" width={180} height={180} className="rounded-full ring-4 ring-blue-200" />
//           </div>
//           <div className="flex flex-col space-y-4">
//             <Image src={doctorImg} alt="Patient 1" width={200} height={130} className="rounded-lg shadow-lg" />
//             <Image src={doctorImg} alt="Patient 2" width={200} height={130} className="rounded-lg shadow-lg" />
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
//             <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
//               <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 12c2.28 0 4.124-1.658 4.124-3.703 0-2.044-1.844-3.702-4.124-3.702S7.876 6.253 7.876 8.297C7.876 10.342 9.72 12 12 12zm0 2c-3.532 0-7.106 1.67-7.106 5v1h14.212v-1c0-3.33-3.574-5-7.106-5z" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">200+</p>
//               <p className="text-gray-500">World’s Top Doctors Consultation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full border border-red-600 bg-contain bg-center py-12 px-4 md:px-8 lg:px-16 xl:px-24"
//              style={{ backgroundImage: `url(${'zhttps://medito-react.vercel.app/static/media/shape-1-1.ddec43f457987af2e084.png'})` }}>
//       <div className="primary-container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
//         {/* Text Section */}
//         <div className="flex-1 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
//             Expert Dental Care For your Bright Smile
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
//           <div className="mt-8 flex justify-center lg:justify-start items-center space-x-4">
//             <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//               Discover More
//             </button>
//             <button className="flex items-center text-blue-600 font-semibold">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M7 6v12l10-6-10-6z" />
//                 </svg>
//               </div>
//               <span className="ml-2">Watch Now</span>
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-center lg:justify-end gap-4 lg:gap-6 flex-wrap">
//           <div className="relative">
//             <Image src={'https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png'} alt="Doctor" width={160} height={160} className="rounded-full ring-4 ring-blue-200" />
//           </div>
//           <div className="flex flex-col space-y-4">
//             <Image src={'https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png'} alt="Patient 1" width={180} height={120} className="rounded-lg" />
//             <Image src={'https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png'} alt="Patient 2" width={180} height={120} className="rounded-lg" />
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
//             <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
//               <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 12c2.28 0 4.124-1.658 4.124-3.703 0-2.044-1.844-3.702-4.124-3.702S7.876 6.253 7.876 8.297C7.876 10.342 9.72 12 12 12zm0 2c-3.532 0-7.106 1.67-7.106 5v1h14.212v-1c0-3.33-3.574-5-7.106-5z" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">200+</p>
//               <p className="text-gray-500">World’s Top Doctors Consultation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
