type RadioProps = {
    id: string;
    name: string;
    checked: boolean;
    icon: React.ReactNode;
    info: string;
    title: string;
    price: string;
    onChange: () => void;

}


export const RadioInput = ({ name, id, info, checked, icon, title, price} : RadioProps) => {
    return(
        <>
            <label className="w-full h-[180px]">
                <input
                    name={name}
                    id={id}
                    type="radio"
                    className=" peer hidden " 
                    checked={checked}
                />
                <div className="flex cursor-pointer  flex-col justify-between w-full h-full rounded-lg border-borderColor p-5 border hover:ring-1 hover:ring-purple peer-checked:ring-1 peer-checked: ring-purple ">
                    {icon}
                    <div className="flex flex-col">
                        <span className="text-lg mb-1 font-semibold text-denim">{title}</span>
                        <span className="font-light mb-1 text-xs text-grey">{price}</span>
                        <span className="text-xs font-light text-denim">{info}</span>
                    </div>
                </div>
            </label>
        </>
    )
}