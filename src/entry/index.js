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

import '../mock';

import DevTools from '../redux/devTool';

class Root extends Component {
    render() {
        const { store, isDev } = this.props;
        return (
            <Provider store={store}>
                <div className="full-screen">
                    <Router history={history} routes={route(store)} />
                    {isDev ? <DevTools /> : null}
                </div>
            </Provider>
        );
    }
}

render(<Root isDev={__DEV__} store={store} />, oApp);
