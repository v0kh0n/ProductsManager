import React from 'react';
import Config from './Config';
import axios from 'axios';

export default function callAPI(endPoint, method = 'GET', data) {
    let API_URL = Config.API_URL;
    return axios({
        method: method,
        url: API_URL + endPoint,
        data: data
    });
}