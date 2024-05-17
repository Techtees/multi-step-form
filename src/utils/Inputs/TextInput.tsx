import React from 'react'
import { InputType } from '../../types/global'
import { useFormContext } from '../../context/formContext'


export const TextInput: React.FC<InputType> = ({ name, placeholder, type, label, value, onChange,  }) => {
    const { error, emailError, phoneError } = useFormContext();
    return (
        <>
            <div className="flex flex-col mb-3">
                <div className='flex justify-between items-center'>
                    <label className="text-denim text-md mb-2">{label}</label>
                    {(name === 'fullName' && error) && <small className='text-xs text-red font-bold'>{error}</small>}
                    {(name === 'email' && emailError) && <small className='text-xs text-red font-bold'>{emailError}</small>}
                    {(name === 'phone' && phoneError) && <small className='text-xs text-red font-bold'>{phoneError}</small>}
                </div>
                <input
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={`rounded-lg border border-borderColor h-[42px] outline-none focus:border-purple p-2 placeholder:text-md  text-denim font-[500] hover:cursor-pointer hover:border-purple  ${((error || emailError || phoneError) && 'border-red') || ' '}`}
                    onChange={onChange}
                />
  
            </div>
        </>
    );
};




