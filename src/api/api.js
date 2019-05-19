import axios from "axios"

export const UserLogin = (data) =>
    axios.post("http://localhost:3000/api/v1/login", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })

export const RandomUser = () =>
    axios.get("https://randomuser.me/api/", {
        headers: {
            "Content-Type": "application/json"
        }
    })
