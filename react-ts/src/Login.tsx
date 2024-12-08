import axios from "axios"
import { useState } from "react"

interface userType {
    email: string,
    firstName: string,
    gender: string,
    id: number,
    image: string,
    lastName: string,
    token: string,
    username: string
}


function Login(){

    let userName: string = "anji"

    let [email, setEmail] = useState<string>("")

    let [user, setUser] = useState<userType>()

    async function btnClick(){
        setEmail("contact@softwareschool.co")
        let apiData = {
            username: 'kminchelle',
            password: '0lelplR'
        }
        let apiResponse = await axios.post("https://dummyjson.com/auth/login", apiData)
        let data = apiResponse.data
        console.log(data)
        setUser(data)

    }

    return(
        <>
        Login page { userName } <br/>
        {email} <br/>

        {
            user?.username
        }

        <br/>    <button onClick={btnClick} >Click me</button>
        </>
    )
}


export default Login









