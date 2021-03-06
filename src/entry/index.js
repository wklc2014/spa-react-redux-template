import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from '../redux/store';
import history from '../redux/history';
import route from '../route';
import DevTools from '../redux/store/DevTools.jsx';
import '../asset/css/index.scss';

const oApp = document.getElementById('app');

if (__DEV__) {
    require('../mock');
}

render((
    <Provider store={store}>
        <div className="full-screen">
            <Router history={history} routes={route(history, store)} />
            {__DEV__ ? <DevTools /> : null}
        </div>
    </Provider>
), oApp);
