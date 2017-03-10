import axios from 'axios';
import API from './API.js';

export default function ServiceLogin(data, cb) {
    axios({
        url: API.LOGIN,
        method: 'get',
        params: data
    }).then(response => {
        cb('ok', response.data);
    }).catch((e) => {
        console.log('ServiceLogin is error', e);
    });
}
