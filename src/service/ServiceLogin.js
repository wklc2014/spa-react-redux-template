'use strict';
import axios from 'axios';
import API from './API.js';

export default function ServiceLogin(data, cb) {
    axios({
        url: API.LOGIN,
        method: 'get',
        dataType: 'json',
        params: data
    }).then(function(response) {
        cb('ok', response.data);
    }).catch(function(e, xhr, response) {
        console.log('ServiceLogin is error', e);
    });
}