import React from "react";
import FormInput from "./FormInput";
import InputButton from "./InputButton";

const SignIn = () => {
  return (
    <div className=" flex flex-col gap-10  justify-center">
      <h1>Signin </h1>
      <FormInput placeholder={"Enter your name"} />
      <FormInput placeholder={"Enter your mail"} />
      <InputButton buttonText={"Signin"} />
    </div>
  );
};

export default SignIn;
