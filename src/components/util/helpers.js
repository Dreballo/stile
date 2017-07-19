import axios from 'axios';

const helper = {
    //get saved posted times from database
    getSchedule: function(){
        return axios.get('/api');
    },

    createProfile: function(first_name, last_name, email, password){
        return axios.post('/create',{
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        });
    }


};

export default helper;