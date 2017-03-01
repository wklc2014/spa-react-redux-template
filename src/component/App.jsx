'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import lodash from 'lodash';

import Logo from './common/Logo.jsx';
import NavLink from './common/NavLink.jsx';

import {NAV_DATA} from './common/const.js';

import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    handleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        const {counter, routing} = this.props;
        const currentRoute = routing.locationBeforeTransitions.pathname;

        const siderProps = {
            collapsible: true,
            collapsed: this.state.collapsed,
            onCollapse: e => {this.handleCollapse()}
        }

        const logoProps = {
            data: counter
        }

        let selectedKeys = '0';

        const menuEle = Object.keys(NAV_DATA).map((nav, i) => {
            const item = NAV_DATA[nav];
            const text = this.state.collapsed ? null : item.text;
            if (currentRoute === item.to) {
                selectedKeys = i + '';
            }
            if (this.state.collapsed) {
                return (
                    <Menu.Item key={i}>
                        <NavLink isHome={!!item.isHome} to={item.to}>
                            <Icon type={item.icon} />
                        </NavLink>
                    </Menu.Item>
                )
            }
            return (
                <Menu.Item key={i}>
                    <Icon type={item.icon} />
                    <span className="nav-text">
                        <NavLink isHome={!!item.isHome} to={item.to}>
                            {text}
                        </NavLink>
                    </span>
                </Menu.Item>
            )
        })

        return (
            <Layout className="layoutWraper">
                <Sider {...siderProps}>
                    <Logo {...logoProps} />
                    <Menu theme="dark" mode="inline" selectedKeys={[selectedKeys]}>
                        {menuEle}
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="contentWraper">
                        {this.props.children}
                    </Content>
                    <Footer className="footerWraper">
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;
