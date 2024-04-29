

function Step() {
    return ( 
        <div className='flex gap-4 items-start cursor-pointer'>
            <div className='bg-sky-blue rounded-full h-[30px] w-[30px] flex justify-center items-center border text-sm text-denim font-bold border-white hover: '>1</div>
            <div className='flex flex-col'>
                <span className='text-xs text-light-blue'>STEP 1</span>
                <span className='text-white text-sm font-bold'>YOUR INFO</span>
            </div>
        </div>
     );
}

export default Step;