import { toggleAction } from "../../actions/sidebarActions"

export const toggle = () => {
    return dispatch => {
        dispatch(toggleAction());
    }
}