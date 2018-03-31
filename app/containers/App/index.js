// Main window
import React, { Component } from 'react';
import omsLogo from '../../assets/images/winmain_logo.png';
import { Layout, Menu } from 'antd';
import { octagon, LANG } from '../../index';
import Settings from '../Settings';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

let LANG__MAIN_WIN;

export default class App extends Component {
    showSettings = () => {
        this.setState({
            settingsVisible: true
        });
    };

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
                        key: "file__create",
                        event: null
                    },
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.FILE_LIST.FILE_OPEN,
                        hotkey: "Ctrl+O",
                        key: "file__open",
                        event: null
                    }
                ]
            },
            {
                name: LANG__MAIN_WIN.TOP_MENU.EDIT_NAME,
                key: "edit-menu",
                items: [
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.EDIT_LIST.SETTINGS,
                        hotkey: "F12",
                        key: "edit__settings",
                        event: this.showSettings
                    }
                ]
            }
        ],
        // Render of top menu
        topMenuRender = topMenu.map((item) => {
            return (
                <SubMenu title={item.name} key={item.key}>
                    {
                        item.items.map((item) => {
                            let hotkeyRender = "";

                            if (item.hotkey) {
                                hotkeyRender = <span className="top-nav__hotkey">{item.hotkey}</span>;
                            }

                            return (
                                <Menu.Item key={item.key} onClick={this.showSettings}>
                                    <span className="top-nav__item-name">{item.name}</span>
                                    {hotkeyRender}
                                </Menu.Item>
                            );
                        })
                    }
                </SubMenu>
            );
        });

        return (
            <div>
                <Layout className="main-win">
                    <Header className="main-win__header">
                        <img src={omsLogo} className="main-win__logo"/>

                        <Menu mode="horizontal" className="main-win__top-nav top-nav">
                            {topMenuRender}
                        </Menu>
                    </Header>
                    <Layout>
                        <Content></Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>
                <Settings />
            </div>
        );
    }
}
