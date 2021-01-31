export const TOGGLE = "TOGGLE";

interface ToggleAction {
    type: typeof TOGGLE;
}

export type SidebarActions = ToggleAction;

export const toggleAction = () => {
    return {
        type: TOGGLE,
    }
}
