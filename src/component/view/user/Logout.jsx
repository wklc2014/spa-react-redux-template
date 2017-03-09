import React, { Component } from 'react';
import { Button, Modal } from 'antd';

class Logout extends Component {

    static PropTypes = {
        userName: React.PropTypes.string.isRequired,
        ActionLogout: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            visible: false
        }
    }

    handleClick() {
        this.setState({
            visible: true
        })
    }

    handleOk() {
        this.props.ActionLogout();
    }

    handleCancel() {
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
                <p className="mb16">{this.props.userName}</p>
                <Button
                    type="primary"
                    onClick={this.handleClick}
                >
                    退出
                </Button>
                <Modal {...modalProps}>
                    <section className="mocalContentWraper">
                        <p>确定要退出登陆吗？</p>
                    </section>
                </Modal>
            </div>
        );
    }
}

export default Logout;
