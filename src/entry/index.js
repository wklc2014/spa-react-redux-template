'use strict';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store from '../redux/store';
import history from '../redux/store/history.js';

import '../asset/css/index.scss';

import route from '../route';
const oApp = document.getElementById('app');

if (__DEV__) {
    require('../mock');
}

import DevTools from '../redux/devTool';

render((
    <Provider store={store}>
        <div className="full-screen">
            <Router history={history} routes={route(store)} />
            {__DEV__ ? <DevTools /> : null}
        </div>
    </Provider>
), oApp);
