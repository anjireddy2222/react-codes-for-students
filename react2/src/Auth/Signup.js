
import { useState } from "react"
import { validateEmail } from "../Utils/utils"
import axios from "axios"

function Signup(){


    // use state variables
    var [name, setName] = useState("")
    var [email, setEmail] = useState("")

    var [mobile, setMobile] = useState("")
    var [pword, setPword] = useState("")

    // error variables
    var [nameError, setNameError] = useState("")
    var [emailError, setEmailError] = useState("")
    var [mobileError, setMobileError] = useState("")
    var [pwordError, setPwordError] = useState("")

    var [apiErrorMsg, setApiErrorMsg] = useState("")
    var [apiSuccessMsg, setApiSuccessMsg] = useState("")


    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handleMobileChange(e){
        setMobile(e.target.value)
    }

    function handlePwordChange(e){
        setPword(e.target.value)
    }

    async function handleCreateAccount(){

        var noOfErrors = 0;

        if( name.length < 3 ){
            setNameError("Min 3 chars")
            noOfErrors++
        }else{
            setNameError("")
        }

        if( validateEmail(email) ){
            setEmailError("")
        }else{
            setEmailError("Email is not valid")
            noOfErrors++
        }

        if( mobile.length == 10 ){
            setMobileError("")
        }else{
            setMobileError("Mobile number is invalid")
            noOfErrors++
        }

        if(pword.length >= 8){
            setPwordError("")
        }else{
            setPwordError("Min 8 chars")
            noOfErrors++
        }

        if( noOfErrors == 0 ){
            
            console.log("calling api", noOfErrors)
            var apiInputData = {
                'email': email, 'name': name, 'password': pword, 'mobile': mobile
            }
            var apiResponse = await axios.post('https://api.softwareschool.co/auth/signup', apiInputData )
            console.log(apiResponse.data.result)
            
            if(apiResponse.data.result == "SUCCESS"){
                setApiSuccessMsg(apiResponse.data.message)
                setApiErrorMsg("")
            }else{
                setApiErrorMsg(apiResponse.data.message)
                setApiSuccessMsg("")
            }

        }




    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Create Acocunt</h3>

                    <div className="mb-3 mt-3">
                        <label>Name</label>
                        <input type="text" onChange={ event => handleNameChange(event)  } className="form-control" placeholder="Name" />
                        <div className="text-danger">{ nameError }</div>
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={ event => handleEmailChange(event) } className="form-control" placeholder="Email" />
                        <div className="text-danger">{emailError}</div>
                    </div>

                    <div className="mb-3">
                        <label>Mobile</label>
                        <input type="text" onChange={ e => handleMobileChange(e) } className="form-control" placeholder="Mobile" />
                        <div className="text-danger">{mobileError}</div>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={ e => handlePwordChange(e) } className="form-control" placeholder="Password" />
                        <div className="text-danger">{pwordError}</div>
                    </div>

                    <div>
                        <button className="btn btn-warning" onClick={ e => handleCreateAccount()  } >Create Account</button>
                    </div>
                    <div className="mt-3">
                        <div className="alert alert-danger">
                            { apiErrorMsg }
                        </div>
                        <div className="alert alert-success">
                            { apiSuccessMsg }
                        </div> 
                    </div>
                    {
                        name
                    }
                    <br/>
                    {
                        email
                    }
                    <br/>
                    {
                        mobile
                    }
                    <br/>
                    {
                        pword
                    }
                </div>
            </div>
        </div>
    )
}

export default Signup


