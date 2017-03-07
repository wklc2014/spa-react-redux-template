'use strict';
import Pretender from 'pretender';
import MockJS from 'mockjs';

import API from '../service/API.js';
import MockLogin from './api/MockLogin.js';

var server = new Pretender(function () {
    this.get(API.LOGIN, MockLogin, 1000);
    this.get('*', this.passthrough);
});

server.prepareBody = function(body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
}

if (__PROD__) {
    server.shutdown();
}

