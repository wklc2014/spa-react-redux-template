'use strict';

function login(request) {
    const { method, params, queryParams } = request;
    let data = {
        'GET': queryParams,
        'POST': params
    };
    return [200, {}, data[method]];
};

export default login;
