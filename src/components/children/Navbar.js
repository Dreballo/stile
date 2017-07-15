//importing react
import React from 'react';
import Sidenav from '../children/Sidenav';

const Navbar = () => (
   <div>
        <div className="navbar-fixed">
            <nav className="transparent z-depth-0"  id="bar">
                <div className="container">
                    <a href="#" data-activates="nav-mobile" id="button-collapse">
                        <i className="material-icons black-text">menu black</i>
                    </a>
                </div>
            </nav>
        </div>

        <Sidenav />
    </div>
);

export default Navbar;