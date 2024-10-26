import Gold_Life_Logo from "@/app/(mainLayout)/assets/logos/Gold_Life_Logo.jpg";
import Image from "next/image";
import Link from "next/link";
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
        < div className="bg-secondary_color ">
          <div className="max-w-7xl mx-auto  ">
            <div className="footer p-10 flex items-center justify-between  text-white md:place-items-center  ">
              <aside className="flex gap-5 justify-center items-center border px-10 ">
            <>
            <Link href={"/"}>
             <Image
                  className="rounded-full"
                  src={Gold_Life_Logo}
                  alt="Formatic Trucking Inc"
                  width={90}
                  height={90}
                />
             </Link>
            </>
                <p>
                  <span className="text-3xl"> Gold Life Limited</span>
                  <br />
                  Comprehensive Care for the Whole Family.
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

            <div className="footer px-10 py-4 border-t-[.2px] border-opacity-45  text-base-content border-base-300">
              <aside className="items-center grid-flow-col text-white">
                <p className="text-3xl">
                  Gold Life Limited <br />{" "}
                  <span className="text-white text-base text-opacity-35 ">
                  Dependable Transportation Solutions Since 2008 {" "}
                  </span>
                </p>
              </aside>
              <nav className="md:place-self-center md:justify-self-end text-white">
                <div className="grid grid-flow-col gap-4">
                  <Link
                    href={"https://www.instagram.com/formatictrucking/"}
                    target="blank"
                  >
                    <i
                      style={{ fontSize: "24px" }}
                      className="fa fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/formatictruck?mibextid=LQQJ4d"
                    }
                    target="blank"
                  >
                    <svg
                      xmlns="https://www.facebook.com/formatictruck?mibextid=LQQJ4d"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </Link>
                  <Link href={"https://www.youtube.com/"} target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
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
