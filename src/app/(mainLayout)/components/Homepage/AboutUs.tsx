import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative max-w-[90rem] mx-auto ">
      <div className="absolute flip-box-animation bottom-0 right-10  2xl:right-20 z-0">
        <div className="flip-box-inner ">
          <Image
            src="https://medito-react.vercel.app/static/media/shape-2-1.8a9867136e2f43c78550.png"
            alt="Massage Background"
            width={200}  
            height={200}
            quality={100}
            className="opacity-100 w-28 h-28 md:w-40 max-w-[16rem] xs:w-full xs:h-full object-scale-down xs:object-cover"
          />
        </div>
      </div>

      <div className=" relative primary-container  justify-between  items-stretch  mx-auto py-12  lg:py-16 flex flex-col-reverse lg:flex-row   space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Column */}
        <div className="flex h-full py-5  items-center justify-center lg:justify-between   space-y-4 w-full lg:w-1/2">
          <div className="flex gap-5  items-stretch justify-center lg:justify-start space-y-4 ">
            <div className="flex-1 gap-5   flex flex-col justify-between ">
              <Image
                src="https://medito-react.vercel.app/static/media/about-2-1.5dd54f70a5ffa6cbd40b.jpg"
                alt="Dental Treatment"
                width={100000}
                height={100000}
                quality={100}
                className="rounded-3xl h-[60%]   w-full"
              />
              <div className="relative    ">
                <Image
                  src="https://medito-react.vercel.app/static/media/about-2-2.c05e53a52421cd0ba4cb.jpg"
                  alt="Dental Surgery"
                  width={1000}
                  height={10000}
                  className="rounded-3xl  object-cover w-full"
                />
                <div className="absolute inset-0 h-full rounded-3xl flex items-center justify-center bg-black bg-opacity-30 ">
                  <div className="  flex items-center justify-center p-3 rounded-full">
                    <div className="playButtonAnimationWhite -ms-5 xs:-ms-0">
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
                </div>
              </div>
            </div>
            <div className="flex relative flex-1 justify-center items-center h-full sia-700">
              <Image
                src="https://medito-react.vercel.app/static/media/about-2-3.2aa03ff49edfb8256802.jpg" // replace with actual image path
                alt="Dentist Working"
                width={300}
                height={200}
                className="rounded-3xl object-cover  w-full"
              />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-1/2  space-y-6  lg:ps-5 text-left">
          <div className="h-full flex justify-center  flex-col ">
            <p className="text-blue-600 font-medium text-left">About Us</p>
            <h2 className=" text-2xl xs:text-3xl md:text-4xl font my-2 lg:my-5 font-bold text-gray-900 leading-tight">
              We Have Been Working In The Dental Treatment Profession For About
              25 Years Long.
            </h2>
            <p className="text-black xs:text-base text-sm font-medium my-2 lg:my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-gray-500 my-2 lg:my-4 text-xs xs:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sed do eiusmod
              tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Buttons Section */}
            <div className="flex mb-2 lg:mb-0 mt-2 flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                More About Us
              </button>
              <div className="flex items-center text-blue-600">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 15.5C20 16.88 18.88 18 17.5 18H6.5C5.12 18 4 16.88 4 15.5V8.5C4 7.12 5.12 6 6.5 6H17.5C18.88 6 20 7.12 20 8.5V15.5zM12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10ZM7 15H17V13.5H7V15ZM15 10H17V8.5H15V10Z" />
                  </svg>
                </div>
                <span className="ml-3 xs:text-lg font-semibold">
                  Emergency (+88) 1902704311
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
