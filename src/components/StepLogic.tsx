import { useStepLogic } from "../hooks/useStep"
import { Info } from "./Steps/Info"
import {Plan} from "./Steps/Plan"
import { Button } from "../utils/Button"
import { Addons } from "./Steps/Addons"
import { Summary } from "./Steps/Summary"

function StepLogic () {
const {next, back, isFirstStep, steps, step, currentStepIndex } =  useStepLogic([
    <Info />,
    <Plan />,
    <Addons />,
    <Summary />

])

const handleSubmit = (e) => {
    e.preventDefault()
}

 return(
    <>
        <div className="mx-auto w-[60%] max-w-[450px] items-start relative">
            <form onSubmit={handleSubmit}>
                {step}
                <div className="absolute bottom-6  w-full">
                    <div className={`flex ${!isFirstStep ? 'justify-between' : 'justify-end'}`}>
                        {!isFirstStep && <Button text = 'Go Back' btnType="primary" type="button" onClick={back} />}
                        <Button 
                            // type="Submit"
                            text = 'Next Step'  
                            btnType="secondary" 
                            onClick={next}
                        />
                        {/* <Button text = 'Confirm' btnType="tertiary" /> */}
                    </div>
                </div>
            </form>
        </div>
    </>
 )
}

export default StepLogic
