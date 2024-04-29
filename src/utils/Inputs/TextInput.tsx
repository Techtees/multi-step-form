
type InputProps = {
    name: string,
    placeholder: string,
    type: string,
    label: string,
}

export const TextInput = ({name, placeholder, type, label} : InputProps) => {
    return (
        <>
            <div className="flex flex-col mb-3 ">
                <label className="text-denim text-md mb-2">{label}</label>
                <input
                  placeholder={placeholder}
                  name={name}
                  type={type}
                  className="rounded-lg border border-borderColor h-[42px] outline-none p-2 placeholder:text-md font-[500] text-grey"
                />  
            </div>
        </>
    )
}

