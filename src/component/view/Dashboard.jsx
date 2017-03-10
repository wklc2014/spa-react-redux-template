import React, { Component } from 'react';
import picJPG from '../../asset/img/pic.jpg';

class Dashboard extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div className="appWraper">
                <h2 className="mb16">
                    This is home page {counter} 23
                </h2>
                <p>
                    <img src={picJPG} alt="" />
                </p>
            </div>
        );
    }
}

export default Dashboard;
