import { FormWrapper } from "../../Forms/FormWrapper";

import { TextInput } from "../../../utils/Inputs/TextInput";

export function Info() {
    return(
        <>
            <FormWrapper titleHeading="Personal Info" titleInfo="Please provide your name, email address, and phone number.">
                <TextInput 
                    label="Name"
                    type= "text" 
                    name="name"
                    placeholder="e.g. Stephen King" 
                />
                <TextInput 
                    label="Email Address"
                    type= "email" 
                    name="email"
                    placeholder="e.g. stephen king@lorem.com" 
                />
                <TextInput 
                    label="Phone Number"
                    type= "text" 
                    name="phone"
                    placeholder="e.g. 1 234 567 890 "
                />
            </FormWrapper>
        </>
    )
}
