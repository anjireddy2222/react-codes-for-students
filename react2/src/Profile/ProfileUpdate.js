import Header from "../Shared/Header"

import Footer from '../Shared/Footer'
import { useState } from "react"


function ProfileUpdate(){

    let [profileFile, setProfileFile] = useState("")

    let [fileTypeError, setFileTypeError] = useState("")
    let [fileSizeError, setFIleSizeError] = useState("")


    function handleFileChange(event){
        setProfileFile(event.target.files[0])
    }

    function uploadFile(){
        
        console.log( profileFile )
        let filename = profileFile.name
        let fileArray = filename.split(".")
        let extension = fileArray[ fileArray.length - 1 ] 
        
        if( extension == "png" || extension == "jpg" ){
            setFileTypeError("")
        }else{
            setFileTypeError(extension + " is not allowed")
        }

        let fileSize = profileFile.size / ( 1024 * 1024 ) // in MB

        if( fileSize <= 1 ){
            setFIleSizeError("")
        }else{
            setFIleSizeError("max 1 MB only")
        }

       
    }

    return(
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <h4>Upload Profile Pic</h4>
                    <div>
                        <input type="file"  className="form-control" onChange={ event => handleFileChange(event) } />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary" onClick={ e => uploadFile() } >Upload File</button>
                    </div>
                    <div className="mt-3 text-danger">
                        {
                            fileTypeError
                        }
                        <br/>
                        {
                            fileSizeError
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )



}





export default ProfileUpdate

