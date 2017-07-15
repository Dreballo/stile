import React from 'react';

import ScheduleWidget from './dashboard/ScheduleWidget';
import RequestAppointment from './dashboard/RequestAppointment';
import StyleBook from "./dashboard/StyleBook";

const Home = () => (

    <div>
        <ScheduleWidget/>
        <RequestAppointment/>
        <StyleBook/>
    </div>

);

export default Home;