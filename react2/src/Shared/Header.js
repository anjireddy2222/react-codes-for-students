import { useState } from "react"
import { useSelector } from "react-redux"

function Header(){

    let counter = useSelector( state => state.counter)

    var [navClassesList, setNavClassesList] = useState("collapse navbar-collapse")
    var isNavShowing = false

    function handleNavToggle(){
        if( isNavShowing == false ){
            isNavShowing = true
            setNavClassesList("navbar-collapse")
        }else{
            isNavShowing = false
            setNavClassesList("collapse navbar-collapse")
        }
    }


    return(
        <nav className="navbar shadow mt-3 navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">
                    <img src="https://d2b98ifobtd07j.cloudfront.net/l12.png" width="200px" />
                </a>
                <button className="navbar-toggler" onClick={ e => handleNavToggle() } >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navClassesList}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/redux" className="nav-link">Redux {counter}</a>
                        </li>
                        <li className="nav-item">
                            <a href="/courses" className="nav-link">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a href="/layout" className="nav-link">Layout</a>
                        </li>
                        <li className="nav-item">
                            <a href="/icons" className="nav-link">Icons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products-list" >Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/api-practice" >Read Data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/manage-users" >Users Data</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile-update" className="nav-link">Update Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="/create-account" className="nav-link">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signin" className="nav-link">Login</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Header