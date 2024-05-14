import { useState, useEffect } from "react";
import { FormWrapper } from "../../Forms/FormWrapper";
import { RadioInput } from "../../../utils/Inputs/RadioInput";
import { ArcadeSvg, ProSvg, AdvanceSvg } from "../../../utils/Svgs";
import { ToggleSwitch } from "../../../utils/Inputs/ToggleSwitch";
import { useFormContext } from "../../../context/formContext";


interface PackageDetails {
    packageName: string;
    packagePrice: string;
}
interface Price {
    arcadePrice: string;
    advancedPrice: string;
    proPrice: string;
}


interface PlanProps {
    billingTy: string,
    price: Price,
    info: string
}

const PlanData: PlanProps = {
    billingTy: '',
    price: {
        arcadePrice: '',
        advancedPrice: '',
        proPrice:'',
    },
    info: ''
}



 const Plan = () => {
    const {planError, setPlanError} = useFormContext()

    const {data, updateFields} = useFormContext()
    const {plan} = data
    const [billingType, setBillingType] = useState(plan.planType)
    const [selectValue, setSelect] = useState<PackageDetails>({
        packageName: plan.package.packageName,
        packagePrice: plan.package.packagePrice,
    })

    
    const { arcadePrice, advancedPrice, proPrice } = PlanData.price;   
    
    
    
    const handleChange = (newValue: PackageDetails) => {
        setPlanError('')
        setSelect(newValue)
        const updatedPlan = {
            ...plan,
            package: {
                ...plan.package,
                packageName: newValue.packageName,
                packagePrice: newValue.packagePrice,
            },
        };
        updateFields({ plan: updatedPlan });
    };

    const handleToggle = () => {
        // setSelect()
        setBillingType((prev) => (prev === "monthly" ? "yearly" : "monthly"));
        updateFields({
            plan: {
                ...plan,
                planType: billingType === 'monthly' ? 'yearly' : 'monthly'
            }
        })
    }
    
    if(billingType === 'monthly') {
        PlanData.price.arcadePrice = '$9/mo',
        PlanData.price.advancedPrice = '$12/mo'
        PlanData.price.proPrice = '$15/mo'
        PlanData.info = ' '
    } else {
        PlanData.price.arcadePrice = '$90/yr',
        PlanData.price.advancedPrice = '$120/yr'
        PlanData.price.proPrice = '$150/yr'
        PlanData.info = ' 2 months free '
    }

    useEffect(() => {
        const updatedPackagePrice = billingType === 'monthly' ?
            { packageName: selectValue.packageName, packagePrice: arcadePrice } :
            { packageName: selectValue.packageName, packagePrice: proPrice };
        setSelect(updatedPackagePrice);

    }, [billingType]);
    
   
    
    return(
        <>
            <FormWrapper titleHeading="Select your plan" titleInfo="You have the option of monthly or yearly billing."> 
            {planError && <small className="text-red">{planError}</small>}
               <div className="flex flex-col mt-2 gap-5 lg:gap-0 lg:flex-row lg:space-x-4">
                    <RadioInput
                        name={"plan"}
                        id={"arcade"}
                        title={"Arcade"}
                        icon = {<ArcadeSvg/>}
                        price={arcadePrice}
                        info={PlanData.info}
                        checked={selectValue.packageName === "arcade" }
                        value ={"arcade"}
                        onChange={() => handleChange({ packageName: 'arcade', packagePrice: arcadePrice })}
                    />
                    <RadioInput 
                        name={"plan"}
                        id={"advanced"}
                        title={"Advanced"}
                        icon = {<AdvanceSvg/>}
                        price={advancedPrice}
                        info={PlanData.info}
                        checked={selectValue.packageName === "advanced" }
                        value ={"advanced"}
                        onChange={() => handleChange({ packageName: 'advanced', packagePrice: advancedPrice })}
                    />
                    <RadioInput 
                        name={"plan"}
                        id={"pro"}
                        title={"Pro"}
                        icon = {<ProSvg/>}
                        price={proPrice}
                        info={PlanData.info}
                        checked={selectValue.packageName === "pro"}
                        value = {"pro"}
                        onChange={() => handleChange({ packageName: 'pro', packagePrice: proPrice })}
                    />
               </div>
               <div className="bg-grey-00 p-4 mt-7 w-full mx-auto rounded">
                    <ToggleSwitch
                        id={"billing"}
                        name={"billing"}
                        title={"billing"}
                        onChange = {handleToggle} 
                        isChecked={billingType === "monthly" } 
                    />
               </div>
            </FormWrapper>
        </>
    )
}

export default Plan
