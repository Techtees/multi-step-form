import { FormWrapper } from "../../Forms/FormWrapper";
import { CheckBox } from "../../../utils/Inputs/CheckBox";

const Addons = () => {
    return(
        <FormWrapper titleHeading="Pick add-ons" titleInfo="Add-ons help enhance your gaming experience.">
            <div className="space-y-4">
                <CheckBox 
                    id={"online_service"}
                    name={"addon"}
                    title={"Online Service"}
                    info={"Access to Multiplayer games"}
                    price={"+$10/yr"}
                />
                <CheckBox 
                    id={"storage"}
                    name={"addon"}
                    title={"Larger Storage"}
                    info={"Extra 1TB of cloud save"}
                    price={"+20/yr"}
                />
                <CheckBox 
                    id={"cu_profile"}
                    name={"addon"}
                    title={"Customizable profile"}
                    info={"Custom theme on your profile"}
                    price={"+$30/yr"}
                />

            </div>
        </FormWrapper>
    )
}

export default Addons