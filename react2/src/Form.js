import { useState } from "react"

function Form(){

    var [course, setCourse] = useState("")
    var [gender, setGender] = useState("")

    var [avatar2, setAvatar2] = useState(false)
    var [terminator, setTerminator] = useState(false)
    var [titanic, setTitanic] = useState(false)

    function handleCourse(e){
        setCourse(e.target.value)
    }

    function handleGender(e){
        setGender(e.target.value)
    }

    function handleAvatar2(e){

        if( e.target.checked == true ){
            console.log(e.target.checked)
            setAvatar2(true)
        }else{
            setAvatar2(false)
        }

    }

    function handleTerminator(e){
        if(e.target.checked == true){
            setTerminator(true)
        }else{
            setTerminator(false)
        }
    }

    function handleTitanic(e){
        if( e.target.checked == true ){
            setTitanic(true)
        }else{
            setTitanic(false)
        }
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3 className="text-success">Form Data</h3>
                    <div>
                        <label>Courses</label>
                        <select className="form-select" onChange={ event => handleCourse(event) }>
                            <option>ReactJS</option>
                            <option>Springboot</option>
                            <option>Data Science</option>
                            <option>Automation Testing</option>
                        </select>
                    </div>
                    <div>
                        <label>Gender</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Male"  name="gender" onChange={ event => handleGender(event) } />
                        <label className="form-check-label" >
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Female" name="gender"  onChange={ event => handleGender(event) } />
                        <label className="form-check-label" >
                            Female
                        </label>
                    </div>
                    <div>
                        <label>Favourite Movies</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Avatar 2" onChange={ event => handleAvatar2(event) }  />
                        <label className="form-check-label" >Avatar 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Terminator" onChange={ event => handleTerminator(event)}  />
                        <label className="form-check-label" >Terminator</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Titanic" onChange={ event => handleTitanic(event)}  />
                        <label className="form-check-label" >Titanic</label>
                    </div>
                    <div className="mt-3">
                        Course: { course} <br/>
                        Gender: { gender} <br/>

                        Avatar2: { avatar2.toString() } <br/>
                        Terminator: { terminator.toString() } <br/>
                        Titanic: { titanic.toString() } <br/>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form
