import React, { Component } from 'react';
//importing React Router
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

//import components
import Navbar from './components/children/Navbar';
import Register from './components/children/Register';
import Login from './components/children/Login';
import PreLogin from './components/children/PreLogin';
import Home from './components/children/Home';
import Footer from './components/children/Footer';
import UserAppointmentRequest from './components/children/UserAppointmentRequest';
import AvailableAppointments from './components/children/AvailableAppointments';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
              <div className="App" id="main">
                  <Switch>
                      <Route exact path='/' component={PreLogin}/>
                      <Route exact path='/login' component={Login}/>
                      <Route exact path='/register' component={Register}/>
                  </Switch>

                        <Route path='/home' component={Navbar}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/home' component={Footer}/>
                        <Route path="/appointment" component={UserAppointmentRequest}/>
                        <Route path="/available" component={AvailableAppointments}/>

              </div>
        </BrowserRouter>
    );
  }
}

export default App;
