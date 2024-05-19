import React, { createContext, useContext, useState, ReactNode, ChangeEvent } from 'react';
import { FormData } from '../types/global';

interface FormContextType {
    data: FormData;
    validate:  (fieldName: keyof FormData, value: string) => string | undefined;
    error:string;
    emailError: string ;
    phoneError: string ;
    planError: string
    setError: (error: string) => void;
    setPhoneError: (error: string) => void;
    setEmailError: (error: string) => void;
    setPlanError :(error: string) => void;
    updateFields: (fields: Partial<FormData>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    resetAddons: () => void;
    isConfirmed: boolean;
    setIsConfirmed: (type: boolean) => void 
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

const initialData: FormData = {
    fullName: '',
    email: '',
    phone: '',
    plan: {
        planType: '',
        packageInfo: {
            packageName: '',
            packagePrice: 0,
        },
    },
    addons:[]
};

export const FormProvider: React.FC<{ children: ReactNode}> = ({children}) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [planError, setPlanError] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false)

    const validate = (fieldName: keyof FormData, value: string): string | undefined => {
        switch (fieldName) {
            case 'fullName':
                if (value.trim() === '') {
                    return 'Full name is required';
                }
                break;
            case 'email':
                if (value.trim() === '') {
                    return 'Email address is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'Invalid email address';
                }
                break;
            case 'phone':
                if (value.trim() === '') {
                    return 'Phone number is required';
                } else if (!/^\d{10}$/.test(value)) {
                    return 'Invalid phone number';
                }
                break;
            default:
                break;
        }
        return undefined;
    };
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));

        switch (name) {
            case 'fullName':
                setError('');
                break;
            case 'email':
                setEmailError('');
                break;
            case 'phone':
                setPhoneError('');
                break;
            default:
                break;
        }
    };

    const updateFields = (fields: Partial<FormData>) => {
        setData(prev => ({
            ...prev,
            ...fields,
        }));
    };

    const resetAddons = () => {
        setData(prev => ({ ...prev, addons: [] }));
    };

    

    const value: FormContextType ={
        // updateFields,
        data,
        handleChange,
        error,
        setError,
        validate,
        setEmailError,
        setPhoneError,
        emailError,
        phoneError,
        updateFields,
        planError,
        setPlanError,
        resetAddons,
        isConfirmed,
        setIsConfirmed
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};


