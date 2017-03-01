'use strict';

import React, { Component } from 'react';

import { Button, Modal } from 'antd';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    handleClick = (e) => {
        this.setState({
            visible: true
        })
    }

    handleOk = (e) => {
        this.props.ActionLogout();
    }

    handleCancel = (e) => {
        this.setState({
            visible: false
        })
    }

    render() {

        const modalProps = {
            title: '弹出框',
            visible: this.state.visible,
            onOk: this.handleOk,
            onCancel: this.handleCancel
        }

        return (
            <div>
                <h2 className="mb16">{ this.props.userName }</h2>
                <Button
                    type="primary"
                    onClick={ this.handleClick }
                >
                    退出
                </Button>
                <Modal { ...modalProps }>
                    <p>确定要退出登陆吗？</p>
                </Modal>
            </div>
        )
    }
}

export default Logout;
