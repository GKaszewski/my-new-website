import {useEffect} from "react";
import {useSelector} from "react-redux";

const useUploadedFile = (setContent) => {
    const {uploadedFile} = useSelector((state) => state.filesReducer);
    useEffect(() => {
        if (!uploadedFile) return;
        const template = `![](${uploadedFile?.file})`;
        console.log('template', template)
        setContent(prev => prev + template);
    }, [uploadedFile]);

    return;
}

export default useUploadedFile;
