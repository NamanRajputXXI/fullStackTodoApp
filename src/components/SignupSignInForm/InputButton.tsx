import React from 'react'
import { InputButtonProps } from '@/types/FormTypes/FormTypes'
const InputButton: React.FC<InputButtonProps> = ({ buttonText }) => {
    return (
        <button className='w-48 p-2 flex justify-center items-center bg-blue-500 text-white font-normal'>{buttonText}</button>
    )
}

export default InputButton
