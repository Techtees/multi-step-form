import { FormWrapper } from "../../Forms/FormWrapper"
import { useFormContext } from "../../../context/formContext"

import CheckImg from '../../../assets/Check.png'

interface Addon {
    name: string;
    price: number;
    displayName: string;
}

interface Idan {
    goTo: (index: number) => void
}

const Summary: React.FC<Idan> = ({goTo}) => {

    const {data, isConfirmed} = useFormContext()
    const{plan, addons} = data
    

    const {planType, packageInfo} =  plan

    // capitallize first letter
    const Package_name = packageInfo.packageName[0].toUpperCase() +  packageInfo.packageName.substring(1)
    const Package_type = planType[0].toUpperCase() +  planType.substring(1)

    const totalAddons = addons.reduce((sum: number, addon: Addon) => sum + addon.price,0)
    const totalPrice = totalAddons + packageInfo.packagePrice;

    const handleClick = () => {
        goTo(1)

    }

    return(
        <>
           {isConfirmed ? (
             <div className="w-[450px] mt-12">
                <div className="flex flex-col items-center justify-center py-8">
                    <img src={CheckImg} className="w-[86px] mb-7" alt="" />
                    <h2 className="text-center text-3xl font-bold text-denim">Thank you!</h2>
                    <p className="text-center text-grey text-md mt-3">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
             </div>
           ) : (
            <FormWrapper titleHeading="Finishing Up" titleInfo="Double-check everything looks OK before confirming.">
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
           )}
            
        </>
    )
}

export default Summary
