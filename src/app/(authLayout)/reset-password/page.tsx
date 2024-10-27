'use client';

import React, { useState, useEffect } from 'react';
import styles from './ResetPassword.module.css'; // Assuming you're using a CSS module for custom styling

const ResetPasswordForm: React.FC = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

    useEffect(() => {
        // Trigger the fly-in animation after the component mounts
        setIsVisible(true);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match.");
           
            setTimeout(() => {
               
                setIsLoading(false); // Stop loading after the process is complete
            }, 1000)
            return;
        }

        // Start loading
       

        // Simulate an API call for password reset
        setTimeout(() => {
            setMessage("Your password has been successfully reset.");
            setNewPassword('');
            setConfirmPassword('');
            setIsLoading(false); // Stop loading after the process is complete
        }, 1000);
    };

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
        <div className="flex items-center bg-blue-50 justify-center min-h-screen">
           
           
            <div
                className={`bg-white mx-1 p-7 border rounded-lg shadow-2xl sm:p-10 max-w-md w-full transform transition-transform duration-300 ${isVisible ? 'animate-flyIn' : 'opacity-0'}`}
            >
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className={`space-y-6 ${styles.resetForm}`}>
                    {/* New Password Input Field */}
                    <div className="relative">
                        <label className="relative w-[100%]">
                            <input
                                required
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span
                                className={`rounded-full text-md absolute left-2 
                                    ${
                                        newPassword
                                            ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                                            : "top-[.02rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300"
                                    } `}
                            >
                                New Password
                            </span>
                        </label>
                    </div>
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
                    {/* Confirm Password Input Field */}
                    <div className="relative">
                        <label className="relative w-[100%]">
                            <input
                                required
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="peer outline-none focus:ring-1 focus:ring-[#3646AB] border-[#e5eaf2] border rounded-md px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span
                                className={`rounded-full text-md absolute left-2 
                                    ${
                                        confirmPassword
                                            ? "left-2 -top-[1.19rem] px-1 border border-[#3646AB] bg-[#eee] scale-[.9] text-[#3B9DF8]"
                                            : "top-[.02rem] peer-focus:-top-[1.19rem] peer-focus:border peer-focus:border-[#3646AB] peer-focus:bg-[#eee] peer-focus:left-2 peer-focus:scale-[.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300"
                                    } `}
                            >
                                Confirm Password
                            </span>
                        </label>
                    </div>

                    {message && <p className={`text-center mt-4 ${message.includes("match") ? 'text-red-600' : 'text-green-600'} animate-fadeIn`}>{message}</p>}

                    {/* Submit Button with Loader */}
                    <button
                        type="submit"
                        className="flex w-full justify-center items-center bg-blue-600 text-white py-3 px-4 rounded-lg overflow-hidden btn-hover relative"
                        disabled={isLoading} // Disable button while loading
                    >
                        <span className="relative w-full overflow-hidden">
                            {!isLoading ? (
                                <>
                                     <span className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform btn-text">
                            Reset Password
                          </span>
                          <span className="absolute left-0 top-0 w-full flex items-center justify-center transition-transform duration-300 ease-in-out transform -translate-y-full opacity-0 btn-text-after">
                            Reset Password
                          </span>
                                </>
                            ) : (
                                <span className="px-1">{loader}</span> // Show loader while loading
                            )}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordForm;

