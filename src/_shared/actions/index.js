export const toggleSideBar = () => {
    console.log("sidebar toggled");
    return {
        type: "toggle",
        payload: "sidebar"
    }
};
