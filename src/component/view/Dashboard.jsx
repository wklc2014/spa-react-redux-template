'use strict';
import React, {Component} from 'react';
import lodash from 'lodash';

import picJPG from '../../asset/img/pic.jpg';

class Dashboard extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div className="appWraper">
                This is home page {counter}
            </div>
        )
    }
}

export default Dashboard;
