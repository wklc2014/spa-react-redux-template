'use strict';

function login(request) {
    const data = request.queryParams;
    return [200, {}, data];
};

export default login;
