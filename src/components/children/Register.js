import React, {Component} from 'react';
import helpers from '../util/helpers';


class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email:'',
            password:'',
            birthdate:'',
            mobile:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        e.preventDefault();
        helpers.createProfile(
            this.state.first_name,
            this.state.last_name,
            this.state.email,
            this.state.password
        ).then(function(){

        }).bind(this);

    }


    render () {
        //console.log(JSON.stringify(this.state,null, 4));
        return(
                <div className="container">
                    <div className="col s12">
                        <form id="register"  onSubmit={this.handleSubmit}>
                            <div className="input-field col s12">
                                <label htmlFor="first_name">First Name</label>
                                <input id="first_name" type="text"  onChange={this.handleChange} className="validate"/>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="last_name">Last Name</label>
                                <input id="last_name" type="text"  onChange={this.handleChange} className="validate"/>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email"  onChange={this.handleChange} className="validate"/>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password"  onChange={this.handleChange} className="validate"/>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="birthdate">Date of Birth</label>
                                <input id="datepicker" type="date" onChange={this.handleChange} className="datepicker"/>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="mobile">Mobile</label>
                                <input id="mobile" type="tel"  onChange={this.handleChange} className="validate"/>
                            </div>
                            <div className="col s12 center">
                                <button className="btn-large waves-effect waves-light" type="submit" >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

}

export default Register;