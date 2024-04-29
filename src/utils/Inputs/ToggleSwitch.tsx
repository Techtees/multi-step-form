type ToggleProps = {
    id: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
}


export const ToggleSwitch = ({name, isChecked, id} : ToggleProps) => {
    return(
        <>
            <div className="mx-auto w-[180px] flex justify-between items-center">
                <span className={`text-sm ${ isChecked ? 'text-denim' : 'text-grey'}`}>Monthly</span>
                <label htmlFor={id} className="cursor-pointer">
                    <input 
                        type="checkbox" 
                        name={name}
                        checked={isChecked}
                        className="peer hidden"
                    /> 
                    <div className="flex h-[20px] w-[38px] bg-denim rounded-full items-center justify-start transition-all duration-150 px-1 peer-checked:justify-end ">
                        <div className="h-[14px] w-[14px] bg-white rounded-full  border"></div>
                    </div>
                </label>
                <span className={`text-sm ${ isChecked ? 'text-denim' : 'text-grey'}`}>Yearly</span>
            </div>
        </>
    )
}