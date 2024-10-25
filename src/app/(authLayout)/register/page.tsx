"use client";
import { signIn } from "next-auth/react";
import styles from "./register.module.css";
import { useEffect, useState,  FormEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "../server-actions/auth.server-actions";
import Loader from "../components/shared/Loader";
import ConfirmEmail, { lottieDefaultOptions } from "../components/shared/confirmEmail";
import Lottie from "react-lottie";


export default function Register () {   
  const router = useRouter()
  const [animate, setAnimate] = useState<boolean>(true);
  const [isLoginFormShowingNow, setIsLoginFormShowingNow] =
    useState<boolean>(false);
  // Error States
  const [isLoginError, setIsLoginError] = useState<string |null>("");
  const [isRegisterError, setIsRegisterError] = useState<string |null>('');

  // **Login Form States**
  const [loginEmail, setLoginEmail] = useState<string>( "fahadabdullah377@gmail.com");
  const [loginPassword, setLoginPassword] = useState<string>("zabist123");

  // **Register Form States**
  const [registerName, setRegisterName] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isRegisterEmailSend, setIsRegisterEmailSend] =
    useState<boolean>(false);
  const handleLoginSubmit = async(event: FormEvent<HTMLFormElement>) => {
    setIsloading(true);
    event.preventDefault();

    const loginData = { email: loginEmail, password: loginPassword };

    const loginResponse = await signIn("credentials", {
      redirect: false,
      ...loginData,
    });
    if (loginResponse?.ok) {
      setIsloading(false);
      toast.success("Logged in successfully");
      router.replace("/dashboard");
    }
    if (!loginResponse?.ok && loginResponse?.error) {
      setIsloading(false);
      console.log(loginResponse?.error);
      setIsLoginError(loginResponse.error);
    }









    // Example Error Handling
    // if (loginPassword !== "expectedPassword") { // Replace with real validation
    //   setIsLoginError(true);
    // } else {
    //   setIsLoginError(false);
    //   // Proceed with successful login actions
    // }
  };

      // **Register Form Submission Handler**
      const handleRegisterSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsloading(true)
        console.log("Register Attempt:");
        console.log("Name:", registerName);
        console.log("Email:", registerEmail);
        console.log("Password:", registerPassword);
    
        const register = await registerUser({
          username: registerName,
          email: registerEmail,
          password: registerPassword,
        });
        setIsloading(false)
    
        if (!register?.success) {
          setIsRegisterError(register?.message);
        }
        if (register?.success) {
          setIsRegisterEmailSend(true);
          toast.success(register?.message);
        }
      };

  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.innerWidth <= 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <>
   
   {!isRegisterEmailSend ? (
        <section
        style={{ background: "linear-gradient(to right, #e2e2e2, #c9d6ff)" }}
        className="min-h-screen   flex justify-center items-center "
      >
            <style jsx>{`
                    .btn-hover {
                      position: relative;
                      overflow: hidden;
                    }
  
                    .btn-hover:hover .btn-text {
                      transform: translateY(-100%); /* Move up and disappear */
                      opacity: 0; /* Fade out */
                    }
  
                    .btn-hover:hover .btn-text-after {
                      transform: translateY(0); /* Move to center */
                      opacity: 1; /* Fade in */
                    }
  
                    .btn-text,
                    .btn-text-after {
                      transition: transform 0.3s ease-in-out,
                        opacity 0.3s ease-in-out;
                      display: inline-block;
                    }
  
                    .btn-text-after {
                      transform: translateY(100%); /* Hidden below */
                      opacity: 0; /* Initially hidden */
                    }
                  `}</style>
        <div className=" Montserrat-font  px-2  w-full   flex  items-center md:max-w-[780px]    justify-center flex-col  ">
          <div
            className={`  fly-in w-full ${styles.container}   min-h-[450px]  ${
              animate ? `${styles.active}` : ""
            } ${
              isMobile && !isLoginFormShowingNow
                ? `${styles.activeForMobileDevieLoginRouteForLoginForm}`
                : ""
            } `}
          >
            <div
              className={` ${styles.formContainer} ${styles.signIn}   w-full sm:w-1/2  `}
            >
              <form onSubmit={handleLoginSubmit} className={`min-w-full  `}>
                <h1 className="font-bold text-black text-3xl my-2 ">Please Login</h1>
  
                <span className="mb-1"> use your email for password</span>
                <div className={`${isLoginError ? `${styles.shake}` : ""}`}>
                  <label className="relative w-[100%]">
                    <input
                      onChange={(e) => setLoginEmail(e.target.value)}
                      onFocus={() => setIsLoginError('')}
                      defaultValue={loginEmail}
                      type="text"
                      className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md  px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                    <span
                      className={` rounded-full text-md  absolute  left-2
                     ${
                      loginEmail
                         ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                         : " top-[.12rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 "
                     } `}
                    >
                      Your Email
                    </span>
                  </label>
  
                  <label className="relative w-[100%]">
                    <input
                      onChange={(e) => setLoginPassword(e.target.value)}
                      onFocus={() => setIsLoginError('')}
                      defaultValue={loginPassword}
                      type="password"
                      className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md  px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                    <span
                      className={` rounded-full text-md  absolute  left-2
                     ${
                      loginPassword
                         ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                         : " top-[.12rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 "
                     } `}
                    >
                      Password
                    </span>
                    {isLoginError && (
                      <span className="text-sm text-red-500 ml-3">
                        {isLoginError}
                      </span>
                    )}
                  </label>
                </div>
                <Link href="/forgot-password">Forget Your Password?</Link>
                {/* <button onClick={() => setIsWrongPass(!isWrongPass)}>
                  Login
                </button> */}
                <button
                 type="submit"
                 onClick={() => setIsLoginError('')}
                className="flex justify-center items-center bg-blue-600 text-white py-3 px- rounded-lg overflow-hidden btn-hover relative">
                  <span className="relative w-max  overflow-hidden">
                  {!isLoading ? (
                          <>
                            <span className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform btn-text">
                              Login
                            </span>
                            <span className="absolute left-0 top-0 w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform -translate-y-full opacity-0 btn-text-after">
                              Login
                            </span>
                          </>
                        ) : (
                          <span className="px-1"><Loader/></span>
                        )}
                  </span>
                </button>
                <p className="text-sm text-center sm:hidden font-semibold ">
                  Doesn&lsquo;t have an account yet?{" "}
                  <span
                    onClick={() => {
                      setAnimate(!animate);
                      setIsLoginFormShowingNow(!isLoginFormShowingNow);
                    }}
                    className="text-blue-600 font-bold"
                  >
                    Register
                  </span>
  
                </p>
              </form>
            </div>
  
            <div
              className={`${styles.formContainer} ${styles.signUp}   sm:left-0 w-full sm:w-1/2   `}
            >
              <form
                style={{
                  transform:
                    isMobile && isLoginFormShowingNow
                      ? "translateX(calc(-100%))"
                      : "none",
                  opacity: isMobile && isLoginFormShowingNow ? "1" : "none",
                  transition: "transform .9s ease",
                }}
                onSubmit={handleRegisterSubmit}
                className={` min-w-full `}
              >
                <h1 className="font-bold text-black text-[26px] md:text-3xl my-2">
                  Create Account
                </h1>
  
                <span className="mb-1"> use your email for registration</span>
                <div className={`${isRegisterError ? `${styles.shake}` : ""}`}>
                  <label className="relative w-[100%]">
                    <input
                      onChange={(e) => setRegisterName(e.target.value)}
                      type="text"
                      className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md  px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                    <span
                      className={` rounded-full text-md  absolute  left-2
                     ${
                      registerName
                         ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                         : "   top-[.12rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 "
                     } `}
                    >
                      Your name
                    </span>
                  </label>
  
                  <label className="relative w-[100%]">
                    <input
                     onChange={(e) => setRegisterEmail(e.target.value)}
                      type="text"
                      className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md  px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                    <span
                      className={` rounded-full text-md  absolute  left-2
                     ${
                      registerEmail
                         ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                         : " top-[.12rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 "
                     } `}
                    >
                      Your Email
                    </span>
                  </label>
  
                  <label className="relative w-[100%]">
                    <input
                       onChange={(e) => setRegisterPassword(e.target.value)}
                      type="text"
                      className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md  px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                    <span
                      className={` rounded-full text-md  absolute  left-2
                     ${
                      registerPassword
                         ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                         : " top-[.12rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 "
                     } `}
                    >
                      Password
                    </span>
                    {isRegisterError && (
                      <span className="text-sm text-red-500 ml-3">
                        {isRegisterError}
                      </span> 
                    )}
                  </label>
                </div>
                {/* <button
                  type="submit"
                  onClick={() => setIsWrongPass(!isWrongPass)}
                >
                  Register
                </button> */}
                <button
                 type="submit"
                 onClick={() => setIsRegisterError('')}
                className="flex justify-center items-center bg-blue-600 text-white py-3 px- rounded-lg overflow-hidden btn-hover relative">
                  <span className="relative w-max  overflow-hidden">
                  {!isLoading ? (
                          <>
                            <span className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform btn-text">
                            Register
                            </span>
                            <span className="absolute left-0 top-0 w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform -translate-y-full opacity-0 btn-text-after">
                            Register
                            </span>
                          </>  
                        ) : (
                          <span className="px-1"><Loader/></span>
                        )}  
                  </span>
                </button>
                <p className="text-sm text-center sm:hidden font-semibold ">
                  {" "}
                  Already Have an account?{" "}
                  <span
                    onClick={() => {
                      setAnimate(!animate);
                      setIsLoginFormShowingNow(!isLoginFormShowingNow);
                    }}
                    className="text-blue-600 font-bold"
                  >
                    Log In
                  </span>
                </p>
              </form>
            </div>
  
            <div
              className={`hidden sm:block ${styles.toggleContainer} rounded-tl-[150px] rounded-tr-[0] rounded-br-[0] rounded-bl-[100px]`}
            >
              <div className={`${styles.toggle}`}>
                <div className={` ${styles.togglePanel} ${styles.toggleLeft}`}>
                  <h1 className="font-bold text-3xl">Welcome Back!</h1>
                  <p>Enter your personal details to use all of site features</p>
                  <button
                  style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                    }}
  
                    onClick={() => {
                      setAnimate(!animate);
                      setIsLoginFormShowingNow(!isLoginFormShowingNow);
                    }}
                    id="login"
                className={` ${!isLoginFormShowingNow ? "" : "hidden"} flex justify-center items-center  text-white py-3 px- rounded-lg overflow-hidden btn-hover relative `}>
                  <span className="relative w-max  overflow-hidden">
                    {" "}
                    {/* Fixed height for one line of text */}
                    <span className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform btn-text">
                    Login
                    </span>
                    <span className="absolute left-0 top-0 w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform -translate-y-full opacity-0 btn-text-after">
                    Login
                    </span>
                  </span>
                </button>
                </div>
                <div className={` ${styles.togglePanel} ${styles.toggleRight}`}>
                  <h1 className="font-bold text-3xl">Hello, Friend!</h1>
                  <p>
                    Register with your personal details to use all of site
                    features
                  </p>
                  <button
                  style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                    }}
  
                    onClick={() => {
                      setAnimate(!animate);
                      setIsLoginFormShowingNow(!isLoginFormShowingNow);
                    }}
                    id="login"
                className={` ${
                  !isLoginFormShowingNow
                    ? "hidden"
                    : " border-white border-[5px]"
                } flex justify-center items-center  text-white py-3 px- rounded-lg overflow-hidden btn-hover relative `}>
                  <span className="relative w-max  overflow-hidden">
                    {" "}
                    {/* Fixed height for one line of text */}
                    <span className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform btn-text">
                     Register
                    </span>
                    <span className="absolute left-0 top-0 w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform -translate-y-full opacity-0 btn-text-after">
                     Register
                    </span>
                  </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ) : (
        <section>
          <ConfirmEmail 
          email={registerEmail} 
          title={"Confirm Email Address!"}
          description=" Follow the link provided to finalize the signup
            process. If you do not see the verification email in your main
            inbox, check your spam folder. Please contact us if you do not
            receive the verification email within a few minutes.">
            <Lottie options={lottieDefaultOptions} height={300} width={300} />
          </ConfirmEmail>
        </section>
      )}
   </>
  );
};

