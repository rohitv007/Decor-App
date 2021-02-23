import React from 'react'
import Footer from './Footer'
import "../css/Login.css"

function Login() {
    return (
        <div>
            <div className="login container-fluid">
                <div id="login-box" className="container-fluid">
                    <h2>Connect With Millions Of Users</h2>
                    <form id='login'>
                        <div className="user-box">
                            <input type="text" name="username" id="username" required />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" id="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="button">
                            <button className="login_btn" type="submit">LOGIN</button>
                        </div>
                        {/* <hr />
                        <div className="forget_pswd">
                            <a href="/login"><small>Forgot Password?</small></a>
                        </div> */}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
