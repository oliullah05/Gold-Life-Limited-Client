"use client";
import { signIn } from "next-auth/react";
import styles from "./Login.module.css";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerUser } from "../server-actions/auth.server-actions";
import ConfirmEmail, {
  lottieDefaultOptions,
} from "../components/confirmEmail";
import Lottie from "react-lottie";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [animate, setAnimate] = useState<boolean>(false);
  const [isLoginFormShowingNow, setIsLoginFormShowingNow] =
    useState<boolean>(true);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const [isLoginError, setIsLoginError] = useState<string | null>("");
  const [isRegisterError, setIsRegisterError] = useState<string | null>("");

  // **Login Form States**
  const [loginEmail, setLoginEmail] = useState<string>(
    "developerJahid05@gmail.com"
  );
  const [loginPassword, setLoginPassword] = useState<string>("goldLife");
  // **Register Form States**
  const [registerName, setRegisterName] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [isRegisterEmailSend, setIsRegisterEmailSend] =
    useState<boolean>(false);

  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsloading(true);
    event.preventDefault();
    setTimeout(() => {
      setIsloading(false)
      setIsRegisterEmailSend(true);
    }, 3000);


    // const loginData = { email: loginEmail, password: loginPassword };

    // const loginResponse = await signIn("credentials", {
    //   redirect: false,
    //   ...loginData,
    // });
    // if (loginResponse?.ok) {
    //   setIsloading(false);
    //   toast.success("Logged in successfully");
    //   router.replace("/dashboard");
    // }
    // if (!loginResponse?.ok && loginResponse?.error) {
    //   setIsloading(false);
    //   console.log(loginResponse?.error);
    //   setIsLoginError(loginResponse.error);
    // }
  };

  // **Register Form Submission Handler**
  const handleRegisterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('object');
    setIsloading(true)
    console.log("Name:", registerName);
    console.log("Email:", registerEmail);
    console.log("Password:", registerPassword);

    setTimeout(() => {
      setIsloading(false)
      setIsRegisterEmailSend(true);
    }, 3000);


    // const register = await registerUser({
    //   username: registerName,
    //   email: registerEmail,
    //   password: registerPassword,
    // });
    // setIsloading(false)

    // if (!register?.success) {
    //   setIsRegisterError(register?.message);
    // }
    // if (register?.success) {
    //   setIsRegisterEmailSend(true);
    //   toast.success(register?.message);
    // }

    // const registerData = await registerUser({ name:registerName, email:registerEmail, password:registerPassword });
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



const inputFocus = ()=>{
  setIsRegisterError("")
  setIsLoginError("")
}


  const loader = (
    <svg
      aria-hidden="true"
      role="status"
      className="inline h-4 me-3 w-max text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );
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
              transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
              display: inline-block;
            }

            .btn-text-after {
              transform: translateY(100%); /* Hidden below */
              opacity: 0; /* Initially hidden */
            }
          `}</style>
          <div className=" Montserrat-font  px-2  w-full   flex  items-center md:max-w-[780px]    justify-center flex-col  ">
            <div
              className={`  fly-in w-full ${
                styles.container
              }   min-h-[450px]  ${animate ? `${styles.active}` : ""} ${
                isMobile && !isLoginFormShowingNow
                  ? `${styles.activeForMobileDevieLoginRouteForLoginForm}`
                  : ""
              } `}
            >
              <div
                className={` ${styles.formContainer} ${styles.signIn}   w-full sm:w-1/2  `}
              >
                <form onSubmit={handleLoginSubmit} className={`min-w-full  `}>
                  <h1 className="font-bold text-black text-3xl my-2 ">
                    Please Login
                  </h1>

                  <span className="mb-1"> use your email for password</span>
                  <div className={`${isLoginError ? `${styles.shake}` : ""}`}>
                    <label className="relative w-[100%]">
                      <input
                      onFocusCapture={inputFocus}
                        required
                        defaultValue={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        onFocus={() => setIsLoginError("")}
                        type="email"
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
                      onFocusCapture={inputFocus}
                        required
                        onChange={(e) => setLoginPassword(e.target.value)}
                        onFocus={() => setIsLoginError("")}
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
                    onClick={() => setIsLoginError("")}
                    className="flex justify-center items-center bg-blue-600 text-white py-3 px- rounded-lg overflow-hidden btn-hover relative"
                  >
                    <span className="relative w-max overflow-hidden">
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
                        <span className="px-1">{loader}</span>
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

              {/* register start */}
              <div
                className={`${styles.formContainer} ${styles.signUp}   sm:left-0 w-full sm:w-1/2   `}
              >
                <form
                  style={{
                    transform:
                      isMobile && isLoginFormShowingNow
                        ? "translateX(calc(100%))"
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

                  <span className="mb-1">
                    or use your email for registration
                  </span>
                  <div
                    className={`${isRegisterError ? `${styles.shake}` : ""}`}
                  >
                    <label className="relative w-[100%]">
                      <input
                      onFocusCapture={inputFocus}
                        required
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
                      onFocusCapture={inputFocus}
                        required
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
                      onFocusCapture={inputFocus}
                        required
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
                    onClick={() => setIsRegisterError("")}
                    className="flex justify-center items-center bg-blue-600 text-white py-3 px- rounded-lg overflow-hidden btn-hover relative"
                  >
                    <span className="relative w-max  overflow-hidden">
                      {" "}
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
                        <span className="px-1">{loader}</span>
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
                  <div
                    className={` ${styles.togglePanel} ${styles.toggleLeft}`}
                  >
                    <h1 className="font-bold text-3xl">Welcome Back!</h1>
                    <p>
                      Enter your personal details to use all of site features
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
                        !isLoginFormShowingNow ? "" : "hidden"
                      } flex justify-center items-center  text-white py-3 px- rounded-lg overflow-hidden btn-hover relative `}
                    >
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
                  <div
                    className={` ${styles.togglePanel} ${styles.toggleRight}`}
                  >
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
                      } flex justify-center items-center  text-white py-3 px- rounded-lg overflow-hidden btn-hover relative `}
                    >
                      <span className="relative w-max  overflow-hidden">
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

export default Login;