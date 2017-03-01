'use strict';
import React from 'react';

const Logo = props => {
    return (
        <div className="logoWraper">
            <span className="logo">
                {props.data}
            </span>
        </div>
    )
};

export default Logo;
