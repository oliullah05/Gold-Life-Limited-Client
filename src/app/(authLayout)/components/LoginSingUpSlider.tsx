import Image from 'next/image';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';


interface Slide {
  testimonial: string;
  name: string;
  title: string;
  img: string; 
}

interface LoginSingUpSliderProps {
  slides: Slide[];
}


const LoginSingUpSlider: React.FC<LoginSingUpSliderProps> = ({slides}) => {
    

    const [currentSlide, setCurrentSlide] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPaused, setIsPaused] = useState(false); // Control for pause on hover
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [transitionDuration, setTransitionDuration] = useState(1500); // Control for card translation duration in milliseconds
    const intervalRef: MutableRefObject<NodeJS.Timeout | null> = useRef<NodeJS.Timeout | null>(null); // Ref to store interval
  
    // Function to set and restart interval
    const autplayTime= transitionDuration+2000
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }
      }, autplayTime); 
    };  
   
    useEffect(() => {
      startInterval();
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current); // Cleanup on component unmount
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides.length, isPaused])
    // Function to navigate to the clicked slide
    const goToSlide = (index: number) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); 
      }; 
      setCurrentSlide(index); 
      startInterval();  
    };
  
    const handleMouseEnter = () => {
      // setIsPaused(true); 
    };
  
    const handleMouseLeave = () => {
      // setIsPaused(false); 
    };
     const poligonTriangleSvg=<svg width="38" height="13" viewBox="0 0 38 13" fill="none" xmlns="http://www.w3.org/2000/svg">     <path d="M15 10.5002C13.8 2.10024 4.83333 0.333568 0.5 0.500235L0 0L38 0.500235C35 1 21.5 9.50006 19 11.5001C17 13.1001 15.5 11.5002 15 10.5002Z" fill="white"/>     </svg>
     const StartSvg = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDD264"/></svg>
    return (
        <div className='flex flex-col justify-between  h-full '>
         <div className="relative   h-max  w-full">
            <div
              className="flex h-full  transition-transform ease-in-out"
              onMouseEnter={handleMouseEnter} // Pause autoplay on hover
               onMouseLeave={handleMouseLeave} // Resume autoplay when hover ends
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transitionDuration: `${transitionDuration}ms`, // Control translation duration here
              }}
            >
              {slides?.map((slide, idx) => (
                <div key={idx} className="min-w-full min-h-full  h-full flex flex-col items-start p-4 relative">
                  <div className="relative min-h-full  h-48 p-6 bg-white text-black rounded-3xl shadow-lg w-full">
                    {/* Testimonial Card */}
                    <div className=" flex items-center mb-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index} className="  text-yellow-500 ">
                            {StartSvg} 
                            </span>
                        ))}
                    </div>
                    <p className="text-base text-[#2C2C2C] mb-4">{slide.testimonial}</p>
                    {/* Arrow under card pointing to profile */}
              
                    {/* <div className="absolute bottom-0 left-5 transform translate-y-full translate-x-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div> */}
                    <div className="absolute bottom-[.9px] w-[38px] left-5 transform translate-y-full translate-x-4     ">{poligonTriangleSvg}</div>
                  </div>

                  {/* Profile Image below the card, on the left */}
                  <div className="flex items-center mt-6">
                    <div className="relative">
                      <Image
                        src={slide?.img}
                        alt={slide?.name}
                        width={60}
                        height={60}
                        className="rounded-full w-16 h-16 border-2 border-blue-500 shadow-lg"
                      />
                    </div>
                    <div className="ml-4 text-left">
                      <h3 className="text-md font-bold">{slide.name}</h3>
                      <p className="text-sm">{slide.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots for slide navigation */}
          <div className="flex space-x-2 justify-center   h-full  mt-4">
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => goToSlide(idx)} // Set slide and restart interval
                className={`h-[6px] ${currentSlide === idx ? 'w-14 bg-white' : 'w-6 bg-gray-400'} rounded-full transition-all ease-in duration-1000`}
              ></div>
            ))}
          </div>
            
        </div>
    );
};

export default LoginSingUpSlider;