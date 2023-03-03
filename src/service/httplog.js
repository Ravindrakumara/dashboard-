/* eslint-disable */ 
import axios from 'axios';

export default axios.create({
    baseURL: "https://ocr123.herokuapp.com/",
    headers: {
      "Content-type": "application/json",
    }
  });