
import NewsLetterBg from "@/app/(mainLayout)/assets/NewsLetterBg/NewsLetterBg.png";
import Image from "next/image";


import {MdOutlineMail} from "react-icons/md";

const NewsletterForm = () => {
 
    return (
        <section className="   w-full my-10 py-10 p-[20px] bg-primary_color relative">
             <div className="absolute inset-0 z-0">
          <Image
            src={NewsLetterBg} 
            alt="Background"
            fill 
            objectFit="" 
            quality={100}
            className="opacity-100 object-scale-cover" 
          />
        </div>



            {/* email icon */}
            <div
                className="rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-blue-500 to-purple-500 p-1.5 w-max">
                <MdOutlineMail
                    className="border border-white p-1.5 rounded-full text-[3rem] text-white"/>
            </div>

            {/* content */}
            <div className=" primary-container sm:w-[70%] w-full lg:w-[50%] mx-auto">
                <h1 className="text-[2rem] sm:text-[3rem] mt-8 font-[800] capitalize text-white leading-[50px] text-center">newsletter</h1>
                <p className="text-[1.1rem] mt-2 text-center text-white font-[300]">Stay updated
                    with our latest news and products.</p>

                <form
                    className="mt-5  sm:flex-row flex-col flex items-center justify-between gap-[15px]">
                    <input placeholder="Your Email Address"
                           className="w-full py-3 px-4 outline-none focus:ring-0 rounded-md "/>

                    <button
                        className="w-max px-8 py-3 rounded-md bg-white text-primary_color">Submit
                    </button>
                </form>

                <p className="text-[0.9rem] text-white text-center mt-8">Your email is safe with
                    us, we don&quot;t spam</p>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    