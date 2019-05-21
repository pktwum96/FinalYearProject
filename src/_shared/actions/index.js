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
