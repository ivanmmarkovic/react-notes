import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


export function Profile(){

    const {username} = useContext(LoginContext);

    return <h1>Username : {username}</h1>

}