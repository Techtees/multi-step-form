import {useState, ReactElement} from 'react'

export function useStepLogic (steps: ReactElement[]) {
 const [currentStepIndex, setCurrentStepIndex] = useState(3)


 function next () {
  setCurrentStepIndex( i => {
    if( i >= steps.length - 1) return i
    return i + 1 
  })
 }

 function back () {
    setCurrentStepIndex(  i => {
     if( i <= 0) return i
       return i - 1 
        }
    )
 }

 function goTo (index: number) {
    setCurrentStepIndex(index)
 }
return {
    isFirstStep: currentStepIndex === 0,
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back, 
    goTo,
    steps
}

}