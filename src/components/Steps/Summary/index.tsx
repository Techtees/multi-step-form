import { FormWrapper } from "../../Forms/FormWrapper"
import { useFormContext } from "../../../context/formContext"
import { useStepContext } from '../../../context/stepContext';

interface Addon {
    name: string;
    price: number;
    displayName: string;
}

const Summary = () => {

    const {data} = useFormContext()
    const {goTo} = useStepContext()
    console.log(goTo)
    const{plan, addons} = data
    

    console.log(addons)
    const {planType, packageInfo} =  plan

    // capitallize first letter
    const Package_name = packageInfo.packageName[0].toUpperCase() +  packageInfo.packageName.substring(1)
    const Package_type = planType[0].toUpperCase() +  planType.substring(1)

    const totalAddons = addons.reduce((sum: number, addon: Addon) => sum + addon.price,0)
    const totalPrice = totalAddons + packageInfo.packagePrice;

    const handleClick = () => {
        goTo(2)
        console.log("ff")
    }

    return(
        <>
            <FormWrapper titleHeading="FInishing Up" titleInfo="Double-check everything looks OK before confirming.">
                <div className="bg-grey-00 p-6">
                    <div className="flex justify-between items-center pb-5 border-b border-borderColor">
                        <div>
                            <p className="text-denim font-bold">{`${Package_name} (${Package_type})`}</p>
                            <p className="text-grey underline cursor-pointer hover:text-purple" onClick={handleClick}>change</p>
                        </div>
                        <p className="font-bold text-denim ">{`$${packageInfo.packagePrice}${planType === 'monthly' ? '/mo' : '/yr'}`}</p>
                    </div>
                    <div className="mt-5">

                        {
                            addons.map((addon: Addon, index: number) => (
                            <div key={index} className="flex justify-between mb-4 ">
                                <p className="text-grey">{addon.name}</p>
                                <p className="text-denim">{`+$${addon.price} ${planType === 'monthly' ? '/mo' : '/yr'}`}</p>
                            </div>

                            ))
                        }
                        
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center p-4">
                    <p className="text-grey">{`Total (per ${planType === 'yearly' ? 'year' : 'month'})`}</p>
                    <p className="font-bold text-purple text-2xl">{`+${totalPrice}${planType === 'monthly' ? '/mo' : '/yr'}`}</p>
                </div>
            </FormWrapper>
        </>
    )
}

export default Summary
