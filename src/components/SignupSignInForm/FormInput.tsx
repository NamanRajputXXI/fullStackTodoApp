import React from 'react'

import { FormInputProps } from '@/types/FormTypes/FormTypes'


const FormInput: React.FC<FormInputProps> = ({ placeholder, type = "text" }) => {
    return (

        <input type={type} placeholder={placeholder} />

    )
}

export default FormInput
