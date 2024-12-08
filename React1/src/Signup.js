

function Signup(){



    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Create Account</h3>

                    <div className="mb-3 mt-3">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div>
                        <button className="btn btn-primary">Create Account</button>
                    </div>
                    <div className="mt-4">
                        <a href="/" >Home</a> <br />
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Signup


