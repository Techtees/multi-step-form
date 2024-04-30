 export type StepTypes = {
    stepNo: string,
    stepTitle: string,
}

export const Steps = ({stepNo, stepTitle} : StepTypes) => {
    return (
        <>
            <div className='flex lg:gap-4 items-start cursor-pointer mr-4 lg:mr-0'>
                <div className='rounded-full h-[30px] w-[30px] flex justify-center items-center border text-sm text-white font-bold border-white hover:bg-sky-blue hover:text-denim cursor-pointer z-10 '>{stepNo}</div>
                <div className='hidden lg:flex flex-col'>
                    <span className='text-xs text-light-blue font-light'>STEP {stepNo}</span>
                    <span className=' text-white text-sm font-bold'>{stepTitle}</span>
                </div>
            </div>
        </>
    )
}