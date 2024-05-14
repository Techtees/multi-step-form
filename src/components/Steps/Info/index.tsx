import React from 'react';
import { useFormContext } from '../../../context/formContext';

import { FormWrapper } from '../../Forms/FormWrapper';
import { TextInput } from '../../../utils/Inputs/TextInput';

type UserData = {
    fullName: string;
    email: string;
    phone: string;
}

type UserProp = UserData & {
    // updateFields: (fields: Partial<UserData>) => void;
    error: string;
    eamilError: string;
    phoneError: string
}

 const Info: React.FC<UserProp> = () => {
    const { data, handleChange, error,emailError, phoneError } = useFormContext();
    console.log(emailError)


    return (
        <FormWrapper titleHeading="Personal Info" titleInfo="Please provide your name, email address, and phone number.">
            {error}
            {phoneError}
            {emailError}
            <TextInput
                label="Name"
                type="text"
                name="fullName"
                value={data.fullName}
                placeholder="e.g. Stephen King"
                onChange={handleChange}
                error={data.fullName}
            />
            <TextInput
                label="Email Address"
                type="text"
                name="email"
                value={data.email}
                placeholder="e.g. stephen king@lorem.com"
                onChange={handleChange}
                error={emailError === 'email' ? 'Email address is required' : undefined} 
            />
            <TextInput
                label="Phone Number"
                type="text"
                name="phone"
                value={data.phone}
                placeholder="e.g. 1 234 567 890"
                onChange={handleChange}
                error={phoneError === 'phone' ? 'Phone number is required' : undefined}
            />
        </FormWrapper>
    );
};

export default Info