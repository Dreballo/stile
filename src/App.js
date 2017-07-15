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

class App extends Component {
  render() {
    return (
        <BrowserRouter>
              <div className="App">
                  <Switch>
                      <Route exact path='/' component={PreLogin}/>
                      <Route exact path='/login' component={Login}/>
                      <Route exact path='/register' component={Register}/>
                  </Switch>
              </div>
        </BrowserRouter>
    );
  }
}

export default App;
