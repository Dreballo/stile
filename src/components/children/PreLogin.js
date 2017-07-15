
import React from 'react';

const PreLogin = () => (

    <div className="container" id="prelogin-buttons">
        <div className="col s12 center">
            <a className="btn-large blue darken-3" href="/auth/facebook"><i className="mdi mdi-facebook-box"/> Login with Facebook</a>
        </div>

        <br/>

        <div className="col s12 center">
            <a className="btn-large red lighten-1" href="/login"><i className="mdi mdi-account"/> Login / Sign up</a>
        </div>
    </div>

);

export default PreLogin;