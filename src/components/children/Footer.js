import React from 'react';

const Footer = () => (
    <footer className="page-footer black">

        <div className="footer-copyright">
            <div className="container">
                <div className="col s12 center">
                    <div className="row">
                        <div className="col s4">
                            <a className="white-text"><i className="mdi mdi-calendar mdi-24px"/></a>
                            <br/>
                            <span className="white-text">Calendar</span>
                        </div>
                        <div className="col s4">
                            <a className="white-text mdi mdi-star mdi-24px"/>
                            <br/>
                            <span className="white-text">Favorites</span>
                        </div>
                        <div className="col s4">
                            <a className="white-text mdi mdi-message mdi-24px"/>
                            <br/>
                            <span className="white-text">Messages</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;