"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

import Gold_Life_Logo from "@/app/(mainLayout)/assets/logos/Gold_Life_Logo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface DropdownProps {
  title: { label: string; link: string };
  items: { label?: string; link?: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {


  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const DownArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-40.74 -40.74 488.92 488.92"
      width=".8rem"
      height=".8rem"
      fill="#fff"
      style={{
        transform: `rotate(${isOpen ? 180 : 0}deg)`,
        transition: "transform .5s ease-in-out",
      }}
      className="md:ms-[.2rem] "
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#red"
        strokeWidth="0.814874"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon>
      </g>
    </svg>
  );



  

  return (
    <div
      className={`dropdown inline-block  text-white hover:text-purple-700 font-bold text-sm  tracking-wide ${styles.dropdown}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
    >
      <div className=""> </div>
      <div className="flex justify-center items-center">
        <Link
          href={title.link}
          className="px-2 md:px-0  py-2 rounded-md  hover:text-white font-bold text-[1rem]"
        >
          {title.label}
        </Link>
        {items.length ? DownArrowIcon : null}
      </div>
      <div
        className="dropdown-menu md:absolute relative   h-auto flex md:mt-8  overflow-hidden  shadow-lg "
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 1.5s ease-in-out, opacity .5s ease-in-out",
        }}
      >
        
        {items.length > 0 && (
          <ul className="block relative bg-white mx-auto shadow  px-3 py-4 border border-gray-200 min-w-[8rem] w-max rounded-lg  ">
            {items.map((item, index) => (
              <li key={index} className="py-1 ">
                <Link
                  href={item.link!}
                  className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer "
                >
                <span className="text-[.8rem]">  {item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};



const Navbar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = (
    <>
      <Dropdown title={{ label: "Home", link: "/" }} items={[]} />
      <Dropdown
        title={{ label: "About", link: "/about" }}
        items={[
          { label: "History", link: "/about/history" },
          { label: "Carier Patner", link: "about/parier-patner" },
          { label: "Charitable Donation", link: "about/charitable-donation" },
          { label: "Logistic", link: "about/logistic" },
          { label: "Going Green", link: "about/going-green" },
        ]}
      />
      <Dropdown
        title={{ label: "Service", link: "/service" }}
        items={[
          {
            label: "Temperature Controlled",
            link: "service/Temperature Controlled",
          },
          { label: "Full Truckload:", link: "service/Full Truckload:" },
          { label: "Less Than Truckload", link: "service/Less Than Truckload" },
          { label: "Just In Time", link: "service/Just In Time" },
          { label: "Cross Dock", link: "service/Cross Dock" },
        ]}
      />
    
      <Dropdown title={{ label: "Shop", link: "/shop" }} items={[]} />
      <Dropdown title={{ label: "Blog", link: "/blog" }} items={[]} />
      <Dropdown
        title={{ label: "Contact", link: "/Contact" }}
        items={[{ label: "Location", link: "/Location" }]}
      />
    </>
  );

  const handleLogoClick = ()=>{
    router.replace("/")
  }
  return (
    <nav className="bg-secondary_color sticky py-2 top-0 w-full ">
      <div className=" primary-container mx-auto  ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between md:justify-between w-full">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-lg">
                <div>
                 
                 <div className="text text-4xl ">
                   
                   <Image
                   className="rounded-full "
                     src={Gold_Life_Logo}
                     alt="Formatic Trucking Inc"
                     width={60}
                     height={60}
                   ></Image>
                 </div>
                </div>
              </a>
            </div>
            
            <div className="hidden md:block ">
              <div className=" flex items-baseline space-x-4 gap-5">
                {dropdownItems}
              </div>
            </div>
            <Button>Book a schedule</Button>
          </div>

          


          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out ${
                isOpen ? "bg-gray-700" : ""
              }`}
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} text-center `}>
        <div className="px-2 pt-2 pb-3 sm:px-3 ">
          <div className="flex flex-col gap-4 ">{dropdownItems}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
