import React, {createContext, useContext, useState, FormEvent, ReactNode} from 'react'
import { FormData,  } from '../types/global';


const initial_Data: FormData = {
    fullName: '',
    email: '',
    phone: '',
}

interface FormContextType {
    data: FormData
    setData: (formData: FormData) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)


export const useFormContext = () => {

    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useStepContext must be used within a StepProvider');
    }
    return context;

}

export const FormProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [data, setData] = useState(initial_Data)


    const value: FormContextType = {
        data,
        setData
    }

    return<FormContext.Provider value={value}>{children} </FormContext.Provider>


}