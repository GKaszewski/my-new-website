import Cookies from 'universal-cookie';

import {signOut} from '../../actions/authActions';

const signOutAction = () => {
	return (dispatch) => {
		const cookies = new Cookies();
		cookies.remove('token');
		dispatch(signOut());
	};
};

export default signOutAction;
