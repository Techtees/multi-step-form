type CheckBoxProps = {
    id: string;
    title: string;
    info: string;
    price: string;
    name: string;
    value: string;
    isChecked?: boolean;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const CheckBox = ({id, title, info, price, isChecked, onChange, value, name} : CheckBoxProps) => {
    return(
        <>
            <div>
                <label htmlFor={id}>
                    <input type="checkbox"
                        id={id}
                        name={name} //eslint-disable-line
                        className="peer hidden"
                        onChange={onChange}
                        checked = {isChecked}
                        value={value}
                    />
                    <div className="border peer-checked:ring-1 peer-checked:ring-purple rounded-lg border-borderColor cursor-pointer flex  items-center justify-between p-3 " >
                        <div className="flex items-center space-x-4">
                            <div className={`h-[18px] w-[18px] rounded border border-borderColor flex justify-center items-center p-1 ${isChecked ? 'bg-purple border-none': ''}`}>
                                <div className={`h-[10px] w-[5px] border-r-2 border-borderColor border-b-2 rotate-45 mb-[2px] ${isChecked ? '' :'hidden'}`}> </div>
                            </div>
                            <div>
                                <p className="text-denim font-bold">{title}</p>
                                <p className="text-sm text-grey">{info}</p>
                            </div>
                        </div>
                        
                         <span className="text-sm text-purple">{price}</span>
                    </div>
                </label>
            </div>
        </>
    )
}