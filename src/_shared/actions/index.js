export const toggleSideBar = () => {
    return {
        type: "toggle",
        payload: "sidebar"
    }
};


export const addToCart = (id) =>{
    return {
        type: "ADDTOCART",
        payload: id
    }
}

export const increment = (id) => {
    return {
        type: "INCREMENT",
        payload: id
    }
}


export const decrement = (id) => {
    return {
        type: "DECREMENT",
        payload: id
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVEITEM",
        payload: id
    }
}


export const clearCart = () => {
    return {
        type: "CLEARCART",
    }
}

export const setAssets = () => {
    return {
        type: "SETASSETS",
    }
}


export const addTotal = () => {
    return {
        type: "ADDTOTALS",
    }
}

export const setRisk= (risk,info) => {
    return {
        type: "SETRISK",
        payload: {
            profile:risk,
            info:info
        }
    }
}

export const allocateAssets = (riskProfile,amount,debtAmount,stockAmount,years) => {
    return {
        type: "ALLOCATEASSETS",
        payload: {
            riskProfile:riskProfile,
            amount:amount,
            debtAmount:debtAmount,
            stockAmount:stockAmount,
            years:years
        }
    }
}

export const userLogin = (data) => {
    return {
        type: "LOGGEDIN",
        data:data,
    }
}
