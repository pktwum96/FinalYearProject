import initialState from '../initialState.js';

const SidebarReducer = (state=initialState, action) => {
    switch(action.type) {
        case "toggle" :
            return {
                sidebarMode: !state.sidebarMode
            }
        default :
            return state
    }
}

export default SidebarReducer;
