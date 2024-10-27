/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const registerUser = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${process.env.SERVER_API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

  
    const data = await response.json();
    console.log({data});
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(err:any){
// emty
  }
};



export const forgotPassword = async ({

  email
}: {
  
  email: string;

}) => {
  try {
    const response = await fetch(`${process.env.SERVER_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email})
    });

  
    const data = await response.json();
    console.log({data});
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(err:any){
// emty
  }
};