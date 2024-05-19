import {useState, useEffect} from 'react';
import { FormWrapper } from "../../Forms/FormWrapper";
import { CheckBox } from "../../../utils/Inputs/CheckBox";

import { useFormContext } from '../../../context/formContext';

interface Addon {
    key: string;
    name: string;
    price: number;
}

const addonPrice = {
    onlineService: 0,
    largeStorage: 0,
    cuProfile: 0,
  };

const addonDisplayNames = {
    onlineService: 'Online Service',
    largeStorage: 'Larger Storage',
    cuProfile: 'Customizable Profile',
};

  
const Addons = () => {
    const {updateFields, data} = useFormContext()

    const [selectAddons, setAddons] = useState<Addon[]>(data.addons);

    const {plan} = data
    const {onlineService, largeStorage, cuProfile} = addonPrice

    if(plan.planType === 'monthly') {
        addonPrice.onlineService = 1;
        addonPrice.largeStorage = 2
        addonPrice.cuProfile = 3
    } else{
        addonPrice.onlineService =  10
        addonPrice.largeStorage = 20
        addonPrice.cuProfile = 20
    }

    useEffect(() => {
        updateFields({ addons: selectAddons });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectAddons]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const key = value as keyof typeof addonPrice
        const addon = {key, name: addonDisplayNames[key], price: addonPrice[key]}
        setAddons(prevAddons => 
            checked ? [...prevAddons, addon] : prevAddons.filter(a => a.key !== key)
        );
    }



    return(
        <FormWrapper titleHeading="Pick add-ons" titleInfo="Add-ons help enhance your gaming experience.">
            <div className="space-y-4">
                <CheckBox 
                    id={"online_service"}
                    name={"addon1"}
                    title={"Online Service"}
                    info={"Access to Multiplayer games"}
                    price={`+$${onlineService} ${plan.planType === 'monthly' ? '/mon' :'/yr'}`}
                    onChange={handleChange}
                    value='onlineService'
                    isChecked={selectAddons.some((addon) => addon.key === 'onlineService')}
                />
                <CheckBox 
                    id={"storage"}
                    name={"addon2"}
                    title={"Larger Storage"}
                    info={"Extra 1TB of cloud save"}
                    price={`+$${largeStorage} ${plan.planType === 'monthly' ? '/mon' :'/yr'}`}
                    onChange={handleChange}
                    value='largeStorage'
                    isChecked={selectAddons.some((addon) => addon.key === 'largeStorage')}
                />
                <CheckBox 
                    id={"cu_profile"}
                    name={"addon3"}
                    title={"Customizable profile"}
                    info={"Custom theme on your profile"}
                    price={`+$${cuProfile} ${plan.planType === 'monthly' ? '/mon' :'/yr'}`}
                    onChange={handleChange}
                    value='cuProfile'
                    isChecked={selectAddons.some((addon) => addon.key === 'cuProfile')}
                />

            </div>
        </FormWrapper>
    )
}

export default Addons