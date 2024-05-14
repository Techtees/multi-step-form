type ToggleProps = {
    id: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
    title: string,
    // checked: boolean
}


export const ToggleSwitch = ({name,  id, onChange, title, isChecked} : ToggleProps) => {
    return(
        <>
            <div className="mx-auto w-[180px] flex justify-between items-center">
                <span className={`text-sm ${ isChecked ? 'text-denim' : 'text-grey'}`}>Monthly</span>
                <label htmlFor={id} className="cursor-pointer">
                    <input 
                        id={id}
                        type="checkbox" 
                        name={name}
                        checked={isChecked}
                        className="peer hidden"
                        onChange={onChange}
                        title={title}
                    /> 
                    <div className="flex h-[20px] w-[38px] bg-denim rounded-full items-center justify-end transition-all duration-150 px-1 peer-checked:justify-start">
                        <div className="h-[14px] w-[14px] bg-white rounded-full  border"></div>
                    </div>
                </label>
                <span className={`text-sm ${ !isChecked ? 'text-denim' : 'text-grey'}`}>Yearly</span>
            </div>
        </>
    )
}