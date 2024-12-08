import NavBar from "./shared/NavBar"
import Footer from "./shared/Footer"
import React, { useState } from 'react';

function Home(){
    
    const [name, setName] = useState("")

    let email = "contact@ss.co"

    let [newEmail, setNewEmail] = useState("contact@ss.co")

    const handleUpdate = () =>{
        email = "student@ss.co"
        console.log('email: ', email)
        setNewEmail("student@ss.co")
    }

    const handletextChange = (e) =>{
        console.log(e)
    }

    return(
        <div onMouseEnter={ e => handletextChange(e)}>
            <NavBar />
            <div className="test-cls card-img-top">
                home page data {email} <br/>
                {newEmail}
            </div>
            <Footer />
            <button onMouseEnter={e => handletextChange(e)}  >Click</button>
            <input type="text" onChange={e => handletextChange(e)} />

        </div>
    )
}
export default Home