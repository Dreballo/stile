import React from 'react';




const UserAppointmentRequest = () => (
    <div className="container">
        <form action="/appointment/add" method="POST">
            <div className="input-field col s12">
                <label htmlFor="Date">Date</label>
                <input id="datepicker" type="date" className="datepicker"/>
            </div>
            <div className="input-field col s12">
                <select>
                    <option value="">Select a timeframe</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Either">Either</option>
                </select>
                <label>Availability</label>
            </div>
            <div className="col s12 center">
                <button className="btn-large waves-effect waves-light" type="submit" name="action">Submit</button>
            </div>
        </form>
    </div>
);

export default UserAppointmentRequest;

