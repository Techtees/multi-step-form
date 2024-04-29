import { FormWrapper } from "../../Forms/FormWrapper";
import { RadioInput } from "../../../utils/Inputs/RadioInput";
import { ArcadeSvg, ProSvg, AdvanceSvg } from "../../../utils/Svgs";
import { ToggleSwitch } from "../../../utils/Inputs/ToggleSwitch";

export function Plan () {
    return(
        <>
            <FormWrapper titleHeading="Select your plan" titleInfo="You have the option of monthly or yearly billing.">
               <div className="flex space-x-4">
                    <RadioInput
                        name={"plan"}
                        id={"arcade"}
                        title={"Arcade"}
                        icon = {<ArcadeSvg/>}
                        price={"$9/mo"}
                        info={" 2 months free"}
                        // checked={true}
                    />
                    <RadioInput 
                        name={"plan"}
                        id={"advanced"}
                        title={"Advanced"}
                        icon = {<AdvanceSvg/>}
                        price={"$9/mo"}
                        info={" 2 months free"}
                    />
                    <RadioInput 
                        name={"plan"}
                        id={"pro"}
                        title={"Pro"}
                        icon = {<ProSvg/>}
                        price={"$9/mo"}
                        info={" 2 months free"}
                    />
               </div>
               <div className="bg-grey-00 p-4 mt-7 w-full mx-auto rounded">
                    <ToggleSwitch  />
               </div>
            </FormWrapper>
        </>
    )
}

