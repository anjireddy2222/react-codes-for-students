import { useEffect } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import customAxios from "../Utils/apis";

function List(){

    useEffect( () =>{

        async function getMyCourses(){
            
            try{
                let apiInputData = {
                    userId: localStorage.getItem("userId")
                }
                let apiResponse = await customAxios.post("https://api.softwareschool.co/courses/getPurchasedCourses", apiInputData)
                console.log( apiResponse )
            }catch(ex){
                console.log( ex.message)
            }
            
        }

        getMyCourses()

    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <h1>In-demand courses for quick job</h1>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default List
