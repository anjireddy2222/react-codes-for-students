import Card from "./Cradproj";
import Form from "./Form";

function Home(){

    var userId = localStorage.getItem('loggedInUserId')

    function logout(){
        localStorage.clear()
        window.location.reload()
    }

    return(
        <div>
            <div>
                <h3>Coding is easy and Fun</h3>
                {
                    userId == null &&  <div><a href="/create-account">Signup</a> <a href="/signin">Login</a></div>
                }
                {
                    userId != null && <div> <button className="btn" onClick={ e => logout()}  >Logout</button> </div>
                }
            </div>
            <Card />
        </div>
    )

}


export default Home;
