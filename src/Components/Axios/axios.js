import axios from 'axios';

const baseOnlineUrl = 'https://neheportfolio-backend.herokuapp.com/api/v1';


const instance = axios.create({
    baseURL: baseOnlineUrl
});

// instance.defaults.headers['authorization'] = 'Bearer ' + localStorage.getItem('token');

instance.interceptors.request.use( request=>{
    console.log("REQUEST",request.headers.authorization);
    return request;
},
error=>{
    console.log("ERROR IN REQUEST",error);
    return Promise.reject(error);
});

instance.interceptors.response.use( response=>{
    console.log("RESPONSE ..",response);
    return response;
},
error=>{
    console.log("ERROR IN RESPONSE",error);

    // if(error.message === 'Network Error'){
    //  alert('No connection to server !!!');
    // }
    
    return Promise.reject(error);
});

export default instance;