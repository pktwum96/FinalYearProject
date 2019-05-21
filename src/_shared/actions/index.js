export const toggleSideBar = () => {
    return {
        type: "toggle",
        payload: "sidebar"
    }
};


export const addToCart = (id) => {
    return {
        type: "ADDTOCART",
        payload: id
    }
}
