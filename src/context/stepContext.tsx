import React, { useState } from 'react';



const useStepProvider = (steps: React.ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex(i => (i >= steps.length - 1 ? i : i + 1));
    };

    const back = () => {
        setCurrentStepIndex(i => (i <= 0 ? i : i - 1));
    };

    const goTo = (index: number) => {
        setCurrentStepIndex(index);
    };

    const isFirstStep = currentStepIndex === 0;
    const step = steps[currentStepIndex];
    const isLastStep = steps.length


    return {
        isFirstStep,
        currentStepIndex,
        isLastStep,
        step,
        next,
        back,
        goTo,
    };
};



export const useStepContext = (steps: React.ReactElement[] = []) => {
    return useStepProvider(steps);
};

