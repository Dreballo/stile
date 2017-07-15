//importing react
import React from 'react';
//importing React Router
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

//import components
import Navbar from './children/Navbar';
import Register from './children/Register';


const Main = () => (
    <BrowserRouter>
        <div>

            <Route path='/' component={Navbar}/>
            <Route path='/register' component={Register}/>

        </div>
    </BrowserRouter>
);

export default Main;