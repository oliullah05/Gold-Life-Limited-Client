import Gold_Life_Logo from "@/app/(mainLayout)/assets/logos/Gold_Life_Logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div className="">
      <div className="waver   border-b-0">
        <Wave
          fill="#00102F"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 70,
            amplitude: 50,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
      <footer className="bg-transparent mt-[-2px]">
        <div className="bg-secondary_color ">
          <div className="primary-container mx-auto  ">
            <div className="footer py-10 px-4 lg:p-10 flex md:flex-row gap-10 md:gap-2 flex-col md:items-center justify-between  text-white md:place-items-center  ">
              <aside className="flex gap-5  md:justify-center items-center  lg:px-10 ">
                <>
                  <Link href={"/"}>
                    <Image
                      className="rounded-full lg:w-24 lg:h-24"  
                      src={Gold_Life_Logo}
                      alt="Formatic Trucking Inc"
                      width={90}
                      height={90}
                      
                    />
                  </Link>
                </>
                <p>
                  <span className="text-2xl lg:text-3xl"> Gold Life Limited</span>
                  <br />
                  Comprehensive Care for You.
                </p>
              </aside>
              <nav>
                <h6 className="text-xl my-4 font-bold ">Services</h6>
                <div className="flex flex-col gap-2">
                  <a className="link link-hover">Cardiology Care</a>
                  <a className="link link-hover">Diagnosis department</a>
                  <a className="link link-hover">Gastroenterology</a>
                  <a className="link link-hover">Therapy department</a>
                </div>
              </nav>
              <nav>
                <h6 className="text-xl my-4 font-bold ">Company</h6>
                <div className="flex flex-col gap-2">
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
                  <a className="link link-hover">Jobs</a>
                  <a className="link link-hover">Press kit</a>
                </div>
              </nav>
              <nav>
                <h6 className="text-xl my-4 font-bold ">Legal</h6>
                <div className="flex flex-col gap-2">
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </div>
              </nav>
            </div>

            <div className="flex md:flex-row flex-col gap-8 justify-between md:px-10 py-4 border-t-[.2px] border-opacity-45  text-base-content border-base-300">
              <aside className="md:items-center grid-flow-col text-white">
                <p className="text-3xl">
                  Gold Life Limited <br />{" "}
                  <span className="text-white text-base text-opacity-35 ">
                  Comprehensive Care for the Whole Family.
                  </span>
                </p>
              </aside>
              <nav className="md:place-self-center md:justify-self-end text-white">
                <div className="flex gap-5">
                  <Link
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} />
                  </Link>
                  <Link
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} />
                  </Link>
                  <Link
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={30} />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
