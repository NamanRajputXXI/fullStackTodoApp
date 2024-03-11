import SignUp from "@/components/SignupSignInForm/SignUp";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <SignUp />
      <Link href={"/SignIn"}>Sign In</Link>
    </div>
  )
};

export default page;
