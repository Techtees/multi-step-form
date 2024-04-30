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
        <div className=" mx-auto max-w-[300px] md:max-w-[500px] shadow-md lg:shadow-none rounded-lg z-10 -top-[70px] lg:-top-[0] lg:w-[60%] lg:max-w-[450px]  items-start relative  bg-white p-5">
            <form onSubmit={handleSubmit}>
                {step}
                <div className="fixed bottom-0 p-4 lg:p-0 lg:absolute left-0 bg-white lg:bottom-3  w-full">
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
