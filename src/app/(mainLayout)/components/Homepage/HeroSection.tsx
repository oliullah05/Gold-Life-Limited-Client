import Image from "next/image";

const shapeBg =
  "https://medito-react.vercel.app/static/media/shape-1-1.ddec43f457987af2e084.png";
const doctorImg =
  "https://medito-react.vercel.app/static/media/hero-2-1.fd61b02f4b75aa776437.png";

export default function HeroSection() {
  return (
    <section className="relative  w-full  bg-blue-50  px-4 md:px-8 lg:px-16 xl:px-24 pt-12 pb-5 flex items-stretch">
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

      <div className="primary-container border gap-10 flex lg:flex-row flex-col justify-between mx-auto items-stretch relative  w-full">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center   text-left h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary_color leading-tight">
            Expert Dental Care For your Bright Smile
          </h1>
          <p className=" text-sm my-5 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="mt-8 flex xs:flex-row flex-col justify-start  items-start xs:items-center space-x-4">
            <button className="bg-blue-600 text-sm py-4 text-white font-semibold  px-4 rounded-lg hover:bg-blue-700 transition">
              Discover More
            </button>
            <button className="flex mt-5 xs:mt-0 items-center text-blue-600 font-semibold">
              <div className="  flex items-center justify-center p-3 rounded-full">
                <div className="playButtonAnimation -ms-5 xs:-ms-0">
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
        <div className="flex-1   flex flex-col xs:flex-row  xs:justify-center lg:justify-end items-center    gap-12  h-full">
          <div className="relative flex flex-col gap-7">
            <Image
              src={doctorImg}
              alt="Doctor"
              width={200}
              height={200}
              className="rounded-full  bg-primary_color rounded-br-none  ring-blue-200"
            />

            <Image
              src={
                "https://medito-react.vercel.app/static/media/hero-2-2.fa6a558bb6c6724fb5eb.jpg"
              }
              alt="Patient 2"
              width={200}
              height={130}
              className="rounded-lg "
            />
          </div>

          <div className="flex flex-col    items-end   gap-5 space-y-4">
            <div className="bg-white flex items-center justify-center translateX-animation     w-max max-w-56 rounded-lg shadow-md py-3 px-2  space-x-3">
              <div className="relative   mb-5 w-10 h-12  flex items-center justify-center ">
                <Image
                  src={
                    "data:image/png;base64,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"
                  }
                  fill
                  alt="mini-logo"
                />
              </div>

              <div className="">
                <p className="text-lg font-semibold">200+</p>
                <p className="  text-sm w-full text-gray-500">
                  World’s Top Doctors,<br />
                  Consultation
                </p>
                
              </div>
            </div>
            <Image
              src={
                "https://medito-react.vercel.app/static/media/hero-2-3.0deb08cd053fdef381b4.jpg"
              }
              alt="Patient 1"
              width={200}
              height={200}
              className="rounded-full  rounded-b-none shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
