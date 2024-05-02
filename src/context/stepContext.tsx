import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StepContextType {
    isFirstStep: boolean;
    currentStepIndex: number;
    step: React.ReactElement;
    next: () => void;
    back: () => void;
    goTo: (index: number) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const useStepContext = () => {
    const context = useContext(StepContext);
    if (!context) {
        throw new Error('useStepContext must be used within a StepProvider');
    }
    return context;
};

export const StepProvider: React.FC<{ steps: React.ReactElement[], children: ReactNode}> = ( {children ,  steps} ) => {
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

    const value: StepContextType = {
        isFirstStep,
        currentStepIndex,
        step,
        next,
        back,
        goTo
    };

    return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
