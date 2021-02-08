import { SidebarActions, TOGGLE } from "../actions/sidebarActions"

interface State {
    isToggled : boolean;
}

const initialState : State = {
    isToggled: false
}

export const sideBarReducer =  (state = initialState, action : SidebarActions) : State => {
    switch (action.type) {
        case TOGGLE:
            return {
                isToggled: !state.isToggled
            }
        default:
            return state;
    }
}