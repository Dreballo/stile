import React from 'react';

const Login = () => (

    <div className="container" id="login-form">
        <form action="/home" method="GET">
            <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <input id="login-email" type="email" className="validate"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="password">Password</label>
                <input id="login-password" type="password" className="validate"/>
            </div>
            <div className="col s12 center">
                <button className="btn-large waves-effect waves-light" type="submit" name="action">LOG IN</button>
            </div>
        </form>
        <br/>

        <div className="container center">
            <p>Don't have an account?<br/>That's okay you can <a href="/register">Register Here</a></p>
        </div>
    </div>

);

export default Login;