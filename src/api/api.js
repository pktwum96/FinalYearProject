import axios from "axios"

export const UserSignIn = (data) =>
    axios.post("https://iportfolio-app.herokuapp.com/api/v1/users/sign-in", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })

export const UserSignUp = (data) =>
    axios.post("https://iportfolio-app.herokuapp.com/api/v1/users/sign-up", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
