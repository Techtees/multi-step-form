type CheckBoxProps = {
    id: string;
    title: string;
    info: string;
    price: string;
    name?: string

}

export const CheckBox = ({id, title, info, price} : CheckBoxProps) => {
    return(
        <>
            <div>
                <label htmlFor={id}>
                    <input type="checkbox"
                        id={id}
                        name={name}
                        className="peer hidden"
                    />
                    <div className="border peer-checked:ring-1 peer-checked:ring-purple rounded-lg border-borderColor cursor-pointer flex  items-center justify-between p-3 " >
                        <div className="flex items-center space-x-4">
                            <div className="h-[18px] w-[18px] rounded border border-borderColor flex justify-center items-center p-1 ">
                                <div className="h-[10px] w-[5px] border-r-2 border-borderColor border-b-2 rotate-45 mb-[2px]"> </div>
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