import Pretender from 'pretender';

import API from '../service/API.js';
import MockLogin from './api/MockLogin.js';

const server = new Pretender(function () {
    this.get(API.LOGIN, MockLogin, 1000);
    // this.get('*.hot-update.json', this.passthrough);
});

server.prepareBody = function (body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
};

server.unhandledRequest = function(verb, path, request) {
    console.log("what is this I don't even...");
}

if (__PROD__) {
    server.shutdown();
}
