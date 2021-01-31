import {
	signedInAlready,
} from "../../actions/authActions";

import Cookies from 'universal-cookie';

const signedIn = () => {
    return (dispatch) => {
        const cookies = new Cookies();
        const token = cookies.get('token');
        if (token) {
            dispatch(signedInAlready(token));
        }
    }
};

export default signedIn;
