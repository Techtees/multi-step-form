export type StepDataType = {
    stepNo: number;
    stepTitle: string;
}

type InputType = {
    name: string,
    label: string,
    type: string,
    placeholder: string,
    value: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string ;
    validate?: (inputValue: string) => string | undefined;
}

interface Package {
    packageName: string,
    packagePrice: number,
}
interface Plan  {
    packageInfo: Pacakge,
    planType: string,
}

export type FormData = {
    fullName: string,
    email: string,
    phone: string,
    plan: Plan;
    addons: Array;
}

