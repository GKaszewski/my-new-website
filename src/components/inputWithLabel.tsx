import {FC} from "react";

interface Props {
    label: string;
    input: JSX.Element;
    className?: string;
    labelClassName?: string;
}

const InputWithLabel: FC<Props> = ({label, input, className, labelClassName}) => {
    return <div className={`flex gap-2 ${className}`}>
        <label className={labelClassName}>{label}</label>
        {input}
    </div>
}

export default InputWithLabel;
