import React from 'react';


class ScheduleWidget extends React.Component {


    render() {
        return (
        <div className="container">
            <div className="col s12 card center">
                <h6>SCHEDULE APPT</h6>
                <div className="chip" data="">
                    {this.date}
                </div>
            </div>
        </div>

        );
    }

}

export default ScheduleWidget;