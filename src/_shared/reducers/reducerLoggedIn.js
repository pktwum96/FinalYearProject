// import initialState from '../initialState.js';

const initialState = {
    loggedIn: false
}

const LoggedInReducer = (state=initialState, action) => {
    switch(action.type) {
        case "toggle" :
            return {
                ...state,
                loggedIn:true
            }
        default :
            return state
    }
}

export default LoggedInReducer;
