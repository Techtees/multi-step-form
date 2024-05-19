type ButtonProps = {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    btnType: string;
    disabled?: boolean;
}

export const Button = ({text, onClick, type, btnType} : ButtonProps) => {
    return(
        <button
            onClick={onClick}
            type= {type}
            className={`h-[40px] rounded-lg border font-medium pl-5 pr-5 flex text-sm justify-center items-center ${btnType === 'primary' && 'border-none pl-0 pr-0 text-grey ] hover:text-denim'} ${btnType=== 'secondary' && 'bg-denim text-white hover:bg-[#164A8A]'} ${btnType === 'tertiary' && 'bg-purple border-none text-white hover:bg-[#928CFF]'}`}
        > {text} 
        </button>
    )
}