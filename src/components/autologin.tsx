import {useDispatch} from "react-redux";
import {useEffect} from "react";
import signedIn from "../redux/dispatchers/auth/signedInAlready";

const AutoLogin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(signedIn());
    }, []);

    return <></>
}


export default AutoLogin;
