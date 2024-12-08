import { useState } from "react"
import { validateEmail } from "../Utils/utils"
import axios from "axios"


function Login(){

    var [userEmail, setEmail] = useState("")
    var [pword, setPword] = useState("")

    // error variables
    var [emailError, setEmailError] = useState("")
    var [pwordError, setPwordError] = useState("")

    // 
    var [apiErrorMsg, setApiErrorMsg] = useState("")
    var [apiSuccessMsg, setApiSuccessMsg] = useState("")

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handlePwordChange(e){
        setPword(e.target.value)
    }

    async function handleLogin(){

        var noOfErrors = 0

        if( validateEmail(userEmail) ){
            setEmailError("")
        }else{
            setEmailError("Email is not valid")
            noOfErrors++
        }

        if( pword.length >= 8 ){
            setPwordError("")
        }else{
            setPwordError("Min 8 chars")
            noOfErrors++
        }

        if( noOfErrors == 0){
            console.log("No errors, call login api")
            var apiInputData = {
                'email': userEmail, 'password': pword
            }
            // console.log( apiInputData )
            var fetchApiInput = {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(apiInputData)
            }

            try{
                var apiResponse = await axios.post("https://dummyjson.com/auth/login", {
                        username: 'kminchelle',
                        password: '0lelplR'
                    }
              )
                console.log( apiResponse.headers['authorization'] ) // authorization // token
                // localStorage.setItem("token", apiResponse.data.data.token)
                // localStorage.setItem("userId", apiResponse.data.data.userId)

                // var apiResponse = await axios.post("https://api.softwareschool.co/auth/login", apiInputData)
                // console.log( apiResponse )
                
            }catch(ex){
                setApiErrorMsg(ex.message)
                setApiSuccessMsg("")
            }

        }

    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type='text' placeholder="Email" onChange={event => handleEmailChange(event) } className="form-control" />
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={ event => handlePwordChange(event)} className="form-control" />
                        <div className="text-danger">{pwordError}</div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={ e => handleLogin() } >Login</button>
                    </div>
                    <div className="mt-3">
                        {
                            apiErrorMsg.length > 0 &&
                            <div className="alert alert-danger">
                            { apiErrorMsg }
                            </div>
                        }
                        {
                            apiSuccessMsg.length > 0 && <div className="alert alert-success">
                            { apiSuccessMsg }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login

