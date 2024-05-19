
import React, { FormEvent } from 'react';

import {InfoStep, AddonsStep, SummaryStep, PlanStep} from './Steps'
import SideBar from "./Aside/SideBar"

import { useStepContext } from '../context/stepContext';

import { Button } from '../utils/Button';
import {useFormContext} from '../context/formContext';



export const StepWrapper: React.FC = () => {

    const {data, validate, setError, setEmailError, setPhoneError, setPlanError, isConfirmed, setIsConfirmed} = useFormContext()
    const { back, isFirstStep, currentStepIndex, goTo } = useStepContext();

    const handleNextStep = () => {
        if (currentStepIndex + 1 === 4 ){
            currentStepIndex === 4
        } else {

            goTo(currentStepIndex + 1 )
        }
    };
    
    
    const steps = [<InfoStep  />, <PlanStep  />, <AddonsStep />, <SummaryStep goTo = {goTo}/>]
    
    const isLastStep = steps.length

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
            return fullNameError || emailError || phoneError;
        }

        // Check for error on planForm 
        if (currentStepIndex === 1) {
            const { packageName, packagePrice } = data.plan.packageInfo;
            if (!packageName || !packagePrice) {
                setPlanError('Please select a plan');
                return;
            } 
        }

        
        handleNextStep()
        if(currentStepIndex === 3) {
            setIsConfirmed(true)
        }
    };
    
    return (
        <>

            <div className="overflow-hidden lg:h-screen flex items-center justify-center">
                <div className="lg:bg-white w-full lg:w-[940px] lg:p-5 lg:shadow-md lg:rounded-lg lg:flex lg:justify-between">
                    <SideBar currStep = {currentStepIndex} />
                    <div className=" mx-auto max-w-[420px] md:max-w-[500px] shadow-md lg:shadow-none rounded-lg z-10 -top-[70px] lg:-top-[0] lg:w-[60%] lg:max-w-[450px]  items-start relative  bg-white p-6">
                        <form onSubmit={handleSubmit}>
                            {steps[currentStepIndex]}
                            <div className="fixed bottom-0 p-4 lg:p-0 lg:absolute left-0 bg-white lg:bottom-3  w-full">
                                {isConfirmed ? '': (
                                    <div className={`flex ${!isFirstStep ? 'justify-between' : 'justify-end'}`}>
                                    {!isFirstStep && <Button text="Go Back" btnType="primary" type="button" onClick={back} />}
                                    {<Button
                                        text={`${currentStepIndex+1 === isLastStep ? 'Submit' : 'Next Step'}`}
                                        btnType={`${currentStepIndex === isLastStep ? 'tertiary' : 'secondary'}`}
                                        type="submit"
                                    />}
                                </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
