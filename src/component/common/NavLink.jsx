"use strict";
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class NavLink extends Component {
    render() {
        const {isHome} = this.props;
        const otherProps = {
            activeClassName: 'navActive',
            className: 'navClass',
            ...this.props
        };
        delete otherProps.isHome;
        if (isHome) {
            return <IndexLink {...otherProps} />;
        }
        return <Link {...otherProps} />;
    }
}

export default NavLink;
