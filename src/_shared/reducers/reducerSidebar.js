// import initialState from '../initialState.js';

const initialState = {
    sidebarMode: true
}

const SidebarReducer = (state=initialState, action) => {
    switch(action.type) {
        case "toggle" :
            return {
                ...state,
                sidebarMode: !state.sidebarMode
            }
        default :
            return state
    }
}

export default SidebarReducer;
