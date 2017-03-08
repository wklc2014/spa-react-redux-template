import React, { Component } from 'react';

import Login from './user/Login.jsx';
import Logout from './user/Logout.jsx';

class User extends Component {
    render() {

        const logoutProps = {
            userName: this.props.userName,
            ActionLogout: this.props.ActionLogout
        }

        if (this.props.userName) {
            return <Logout {...logoutProps} />
        }

        const loginProps = {
            ActionLogin: this.props.ActionLogin
        }

        return <Login {...loginProps} />
    }
}

export default User;
