/* eslint-disable */ 
import axios from 'axios';

export default axios.create({
    baseURL: "https://onecollector.herokuapp.com/",
    headers: {
      "Content-type": "application/json",
      'Authorization':`Token ${localStorage.getItem('auth_Token')}`
    }
  });