// Main window

import React, { Component } from 'react';
import omsLogo from '../../assets/images/winmain_logo.png';
import { Layout, Menu } from 'antd';
import { octagon, LANG } from '../../index';

const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

let LANG__MAIN_WIN;

export default class App extends Component {
    render() {
        LANG__MAIN_WIN = LANG.MAIN_WINDOW;

        // Content of top menu
        let topMenu = [
            // Menu "File"
            {
                name: LANG__MAIN_WIN.TOP_MENU.FILE_NAME,
                key: "file-menu",
                items: [
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.FILE_LIST.FILE_CREATE,
                        hotkey: "Ctrl+N",
                        key: "file__create"
                    },
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.FILE_LIST.FILE_OPEN,
                        hotkey: "Ctrl+O",
                        key: "file__open"
                    }
                ]
            }
        ],
        // Render of top menu
            topMenuRender = topMenu.map((item, i) => {
            return (
                <SubMenu title={item.name} key={item.key}>
                    {
                        item.items.map((item, i) => {
                            let hotkeyRender = "";

                            if (item.hotkey) {
                                hotkeyRender = <span className="top-nav__hotkey">{item.hotkey}</span>;
                            }

                            return (
                                <MenuItem key={item.key}>
                                    <span className="top-nav__item-name">{item.name}</span>
                                    {hotkeyRender}
                                </MenuItem>
                            );
                        })
                    }
                </SubMenu>
            );
        });

        return (
            <Layout className="main-win">
                <Header className="main-win__header">
                    <img src={omsLogo} className="main-win__logo"/>

                    <Menu mode="horizontal" className="main-win__top-nav top-nav">
                        {topMenuRender}
                    </Menu>
                </Header>
                <Layout>
                    <Content></Content>
                    <Sider></Sider>
                </Layout>
                <Footer></Footer>
            </Layout>
        );
    }
}
