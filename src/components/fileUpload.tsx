import React, {FC, useRef} from "react";
import {Button} from "./button";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    multiple?: boolean;
    accept?: string;
    value?: string;
}

const FileUpload: FC<Props> = ({onChange, className, multiple, accept, value}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    return <>
        <input value={value} type="file" multiple={multiple} accept={accept} ref={fileInputRef} onChange={onChange} className="hidden" />
        <Button callback={() => fileInputRef.current?.click()} className={className}>Upload</Button>
    </>
}

export default FileUpload;
