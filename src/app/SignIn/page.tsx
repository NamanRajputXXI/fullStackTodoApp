import SignIn from "@/components/SignupSignInForm/SignIn";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <SignIn />
      <Link href={"/SignUp"}>Sign Up</Link>
    </div>
  );
};

export default page;
