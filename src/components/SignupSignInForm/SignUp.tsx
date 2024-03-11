import React from 'react'
import FormInput from './FormInput'
import InputButton from './InputButton'

const SignUp = () => {
    return (
        <div className=" flex flex-col gap-10  justify-center">
            <h1>Sign up</h1>
            <FormInput placeholder={"Enter your name"} />
            <FormInput placeholder={"Enter your mail"} />
            <InputButton buttonText={"Signup"} />
        </div>
    )
}

export default SignUp
