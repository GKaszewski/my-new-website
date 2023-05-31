import {uploadFile} from "../redux/dispatchers/files/uploadFile";

export const onFileDrop = (event, dispatch, token: string) => {
    console.log("onFileDrop", 'event', event, 'dispatch', dispatch, 'token', token)
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type.split("/")[0] !== "image") return;
    dispatch(uploadFile(file, token));
};
