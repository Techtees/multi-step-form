import { useState, useEffect } from "react";
import { FormWrapper } from "../../Forms/FormWrapper";
import { RadioInput } from "../../../utils/Inputs/RadioInput";
import { ArcadeSvg, ProSvg, AdvanceSvg } from "../../../utils/Svgs";
import { ToggleSwitch } from "../../../utils/Inputs/ToggleSwitch";
import { useFormContext } from "../../../context/formContext";

interface PackageDetails {
    packageName: string;
    packagePrice: number;
}
interface Price {
    arcadePrice: number;
    advancedPrice: number;
    proPrice: number;
}

const Plan = () => {
    const { planError, setPlanError, data, updateFields, resetAddons } = useFormContext();
    const { plan } = data;

    const [billingType, setBillingType] = useState(plan.planType);
    const [prices, setPrices] = useState<Price>({
        arcadePrice: 9 ,
        advancedPrice: 12,
        proPrice: 15,
    });

    const [selectValue, setSelect] = useState<PackageDetails>({
        packageName: plan.packageInfo.packageName,
        packagePrice: plan.packageInfo.packagePrice,
    });

    useEffect(() => {


        const newPrices = billingType === 'monthly' ? {
            arcadePrice: 9,
            advancedPrice: 12,
            proPrice: 15,
        } : {
            arcadePrice: 90,
            advancedPrice: 120,
            proPrice: 150,
        };

        setPrices(newPrices);

        if(plan.planType.trim() === ''){
            setBillingType('yearly')
        } else{
            setBillingType(billingType)
        }

        const updatedPackagePrice = selectValue.packageName === 'arcade' ? newPrices.arcadePrice : selectValue.packageName === 'advanced' ? newPrices.advancedPrice : selectValue.packageName === 'pro' ? newPrices.proPrice : 0;

        const updatedSelectValue = { ...selectValue, packagePrice: updatedPackagePrice };
        
        setSelect(updatedSelectValue);

        // Update the global state as well
        const updatedPlan = {
            ...plan,
            planType: billingType,
            packageInfo: updatedSelectValue,
        };
        updateFields({ plan: updatedPlan });
    }, [billingType]);

    const handleChange = (newValue: PackageDetails) => {
        setPlanError('');
        setSelect(newValue);

        const updatedPlan = {
            ...plan,
            packageInfo: newValue,
        };
        updateFields({ plan: updatedPlan });
    };

    const handleToggle = () => {
        setBillingType((prev) => (prev === "monthly" ? "yearly" : "monthly"));
        resetAddons()
    };



    return (
        <>
            <FormWrapper titleHeading="Select your plan" titleInfo="You have the option of monthly or yearly billing.">
                {planError && <small className="text-red">{planError}</small>}
                <div className="flex flex-col mt-2 gap-5 lg:gap-0 lg:flex-row lg:space-x-4">
                    <RadioInput
                        name={"plan"}
                        id={"arcade"}
                        title={"Arcade"}
                        icon={<ArcadeSvg />}
                        price={`$${prices.arcadePrice} ${billingType === 'monthly' ? '/mon' : '/yr'}`}
                        info={billingType === 'yearly' ? '2 months free' : ' '}
                        checked={selectValue.packageName === "arcade"}
                        value={"arcade"}
                        onChange={() => handleChange({ packageName: 'arcade', packagePrice: prices.arcadePrice })}
                    />
                    <RadioInput
                        name={"plan"}
                        id={"advanced"}
                        title={"Advanced"}
                        icon={<AdvanceSvg />}
                        price={`$${prices.advancedPrice} ${billingType === 'monthly' ? '/mon' : '/yr'}`}
                        info={billingType === 'yearly' ? '2 months free' : ' '}
                        checked={selectValue.packageName === "advanced"}
                        value={"advanced"}
                        onChange={() => handleChange({ packageName: 'advanced', packagePrice: prices.advancedPrice })}
                    />
                    <RadioInput
                        name={"plan"}
                        id={"pro"}
                        title={"Pro"}
                        icon={<ProSvg />}
                        price={`$${prices.advancedPrice} ${billingType === 'monthly' ? '/mon' : '/yr'}`}
                        info={billingType === 'yearly' ? '2 months free' : ' '}
                        checked={selectValue.packageName === "pro"}
                        value={"pro"}
                        onChange={() => handleChange({ packageName: 'pro', packagePrice: prices.proPrice })}
                    />
                </div>
                <div className="bg-grey-00 p-4 mt-7 w-full mx-auto rounded">
                    <ToggleSwitch
                        id={"billing"}
                        name={"billing"}
                        title={"billing"}
                        onChange={handleToggle}
                        isChecked={billingType === "monthly"}
                    />
                </div>
            </FormWrapper>
        </>
    );
}

export default Plan;
