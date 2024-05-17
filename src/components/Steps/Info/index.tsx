import { useFormContext } from '../../../context/formContext';
import { FormWrapper } from '../../Forms/FormWrapper';
import { TextInput } from '../../../utils/Inputs/TextInput';

 const Info = () => {
    const { data, handleChange} = useFormContext();

    return (
        <FormWrapper titleHeading="Personal Info" titleInfo="Please provide your name, email address, and phone number.">
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
                error={data.email} 
            />
            <TextInput
                label="Phone Number"
                type="text"
                name="phone"
                value={data.phone}
                placeholder="e.g. 1 234 567 890"
                onChange={handleChange}
                error={data.phone}
            />
        </FormWrapper>
    );
};

export default Info