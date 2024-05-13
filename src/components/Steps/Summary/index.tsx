import { FormWrapper } from "../../Forms/FormWrapper"

const Summary = () => {
    return(
        <>
            <FormWrapper titleHeading="FInishing Up" titleInfo="Double-check everything looks OK before confirming.">
                <div className="bg-grey-00 p-6">
                    <div className="flex justify-between items-center pb-5 border-b border-borderColor">
                        <div>
                            <p className="text-denim font-bold">Arcade(Montly)</p>
                            <p className="text-purple hover:underline cursor-pointer">change</p>
                        </div>
                        <p className="font-bold text-denim ">$9/mon</p>
                    </div>
                    <div className="mt-3">
                        <div className="flex justify-between mb-2 ">
                            <p className="text-grey">Online Service</p>
                            <p className="text-denim">+1/mo</p>
                        </div>
                        <div className="flex justify-between ">
                            <p className="text-grey">Online Service</p>
                            <p className="text-denim">+1/mo</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center p-4">
                    <p className="text-grey">Total(per Month)</p>
                    <p className="font-bold text-purple text-2xl">+12/mo</p>
                </div>
            </FormWrapper>
        </>
    )
}

export default Summary
