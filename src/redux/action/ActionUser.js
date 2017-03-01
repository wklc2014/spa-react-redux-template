'use strict';
import ActionType from '../actionType';

import ServiceLogin from '../../service/ServiceLogin.js';

function login(userName) {
    return {
        type: ActionType.USER_LOGIN,
        payload: userName || ''
    }
}

export function ActionLogin(data) {
    return dispatch => {
        ServiceLogin(data, (stat, resp) => {
            if (stat === 'ok') {
                dispatch(login(resp.userName));
            }
        })
    }
}

export function ActionLogout() {
    return login()
}

