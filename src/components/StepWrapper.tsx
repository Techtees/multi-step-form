
import React, { FormEvent } from 'react';

import {InfoStep, AddonsStep, SummaryStep, PlanStep} from './Steps'
import SideBar from "./Aside/SideBar"

import { useStepContext } from '../context/stepContext';

import { Button } from '../utils/Button';
import {useFormContext} from '../context/formContext';


export const StepWrapper: React.FC = () => {

    const {data, validate, setError, error, emailError, phoneError,  setEmailError, setPhoneError, setPlanError} = useFormContext()

    const handleNextStep = () => {
        next();
    };
    const stepl = [<InfoStep {...data}  error ={ error} eamilError= {emailError} phoneError={phoneError}  />, <PlanStep  />, <AddonsStep />, <SummaryStep />]
    const { next, back, isFirstStep, step, currentStepIndex,  } = useStepContext(stepl);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {fullName, email, phone,} = data

        // Validate each field individually
        const fullNameError = validate('fullName', fullName);
        const emailError = validate('email', email);
        const phoneError = validate('phone', phone);

        setError(fullNameError || '');
        setEmailError(emailError || '');
        setPhoneError(phoneError || '');

    
        // Check if any field has an error
        if (fullNameError || emailError || phoneError ) {
            return fullNameError || emailError || phoneError; // Do not proceed if any field has an error
        }

        // Check for error on planForm 
        if (currentStepIndex === 1) {
            const { packageName, packagePrice } = data.plan.package;
            if (!packageName || !packagePrice) {
                setPlanError('Please select a plan');
                return;
            } 
        }

        handleNextStep()

     

    };
    

    return (
        <>

            <div className="overflow-hidden lg:h-screen flex items-center justify-center">
                <div className="lg:bg-white w-full lg:w-[940px] lg:p-5 lg:shadow-md lg:rounded-lg lg:flex lg:justify-between">
                    <SideBar currStep = {currentStepIndex} />
                    <div className=" mx-auto max-w-[300px] md:max-w-[500px] shadow-md lg:shadow-none rounded-lg z-10 -top-[70px] lg:-top-[0] lg:w-[60%] lg:max-w-[450px]  items-start relative  bg-white p-5">
                        <form onSubmit={handleSubmit}>
                            {step}
                            <div className="fixed bottom-0 p-4 lg:p-0 lg:absolute left-0 bg-white lg:bottom-3  w-full">
                                <div className={`flex ${!isFirstStep ? 'justify-between' : 'justify-end'}`}>
                                    {!isFirstStep && <Button text="Go Back" btnType="primary" type="button" onClick={back} />}
                                    <Button
                                        // type="Submit"
                                        text="Next Step"
                                        btnType="secondary"
                                        type="submit"
                                    />
                                    {/* <Button text="Confirm" btnType="tertiary" /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
        </>
    );
};
