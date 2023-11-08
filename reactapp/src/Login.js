import React from "react";

function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary">
        <div className="50-w p-5 rounded bg-white ">
                <form>
                    <h2 className="text-center">Sign In</h2>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Your Email" className="form-control" />

                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Your Password" className="form-control" />
                    </div>
                    <div className="mb-2">
                    <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
                    <label htmlFor="check" className="custom-input-label">Remember me</label>
                    </div>
                    <div className="d-grid">
                    <button className="btn btn-success">Sign In</button>
                    </div>
                    <p className=" text-end mt-2">
                    forget <a href="">Password</a>  <a href="">Sign Up</a>
                    </p>
                </form>
            </div>

        </div>
    )
};

export default Login;