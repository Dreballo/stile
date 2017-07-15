import React from 'react';

const Register = () => (
    <div className="container">
        <div className="col s12">
            <form id="register" action="/register/submit" method="post">
            <div className="input-field col s12">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" className="validate"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" className="validate"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="validate"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="validate"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="birthdate">Date of Birth</label>
                <input id="datepicker" type="date" className="datepicker"/>
            </div>
            <div className="input-field col s12">
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" type="tel" className="validate"/>
            </div>
            <div className="col s12 center">
                <button className="btn-large waves-effect waves-light" type="submit" name="action">Register</button>
            </div>
            </form>
        </div>
    </div>
);

export default Register;