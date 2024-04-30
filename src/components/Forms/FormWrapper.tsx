import { ReactNode } from "react"

type FormWrapperProps = {
    titleHeading: string,
    titleInfo: string,
    children: ReactNode,
}

export function FormWrapper ({titleHeading, titleInfo, children}: FormWrapperProps) {

    return(
        <>
            <div className="lg:mt78">
                <h2 className="text-denim text-3xl font-bold mb-2">{titleHeading}</h2>
                <p className="text-md mb-6 text-grey ">{titleInfo}</p>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
