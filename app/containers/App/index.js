// Main window

import React, { Component } from 'react';
import omsLogo from '../../assets/images/winmain_logo.png';
import { Layout, Menu } from 'antd';
import { octagon } from '../../index';

const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

const LANG = octagon.lang.data

export default class App extends Component {
    render() {
        return (
            <Layout className="main-win">
                <Header className="main-win__header">
                    <img src={omsLogo} />

                    <Menu mode="horizontal">
                        <MenuItem></MenuItem>
                    </Menu>
                </Header>
                <Layout>
                    <Content>content</Content>
                    <Sider>side</Sider>
                </Layout>
                <Footer></Footer>
            </Layout>
        );
    }
}
