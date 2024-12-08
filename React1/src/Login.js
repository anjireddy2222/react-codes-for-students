

function Login(){




    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label>EMAIL</label>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label>PASSWORD</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div>
                        <button className="btn btn-primary" >Login</button>
                    </div>
                    <div className="mt-4">
                        <a href="/" >Home</a> <br />
                        <a href="/create-account">Signup</a>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Login;











