import { getRoles } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";


function Card(){



    let [data, setData] = useState([])


    useEffect( () =>{
        async function getData(){

            let apiResponse = await axios("https://dummyjson.com/products")
            setData(apiResponse.data.products)

        }
        getData()
    },[])

    async function login(){
        let apiResponse = await axios.post("https://dummyjson.com/auth/login", {username: 'kminchelle',
        password: '0lelplR'})
        console.log( apiResponse.data )
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
    }


    return (
        <> in card: 
        {
            data.map( d => (
                <div>
                    {d.title}
                </div>
            ))
        }
        <button className="btn btn-primary"  onClick={e => login() }>Login</button>
        </>
    )
}

export default Card;