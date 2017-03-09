import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../component/AppContainer.jsx';
import Dashboard from '../component/view/DashboardContainer.jsx';
import Counter from '../component/view/CounterContainer.jsx';
import User from '../component/view/UserContainer.jsx';

function route(history, store) {
    const validate = (nextState, replaceState, callback) => {
        // 需要做权限控制的时候开启
        // const isLoggedIn = !!store.getState().auth.authenticated;
        // if (!isLoggedIn) {
            // replaceState(null, '/login');
        // }
        callback();
    };
    return (
        <Router history={history} onEnter={validate}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="/counter" component={Counter} />
                <Route path="/user" component={User} />
            </Route>
        </Router>
    );
}

export default route;
