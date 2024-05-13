import React, { useState, ReactNode } from 'react';

interface StepProviderProps {
    steps?: React.ReactElement[];
    children: ReactNode;
}




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

    return {
        isFirstStep,
        currentStepIndex,
        step,
        next,
        back,
        goTo
    };
};

const StepProvider: React.FC<StepProviderProps> = ({ steps = [], children }) => {
    const stepProviderValue = useStepProvider(steps);
    return <>{children}</>;
};

export const useStepContext = (steps: React.ReactElement[] = []) => {
    return useStepProvider(steps);
};

export default StepProvider;
