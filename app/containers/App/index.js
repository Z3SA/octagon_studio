// Main window
import React, { Component } from 'react';
//import omsLogo from '../../assets/images/winmain_logo.png';
import { Layout, Menu } from 'antd';
import { octagon, LANG } from '../../index';
import Settings from '../Settings';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

let LANG__MAIN_WIN;

export default class App extends Component {
    // Show modal window - Settings
    showSettings = () => {
        this.refs.modalSettings.showModal();
    }
    // Top menu callbacks
    topMenuCallbacks = (e) => {
        e.item.props.event();
    }

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
            let subItems = [];
            item.items.map((item) => {
                let hotkeyRender = "";

                if (item.hotkey) {
                    hotkeyRender = <span className="top-nav__hotkey">{item.hotkey}</span>;
                }

                subItems.push(
                    <Menu.Item key={item.key} event={item.event}>
                        <span className="top-nav__item-name">{item.name}</span>
                        {hotkeyRender}
                    </Menu.Item>
                );
            });

            return <SubMenu title={item.name} key={item.key} children={subItems} />;
        });

        return (
            <div>
                <Layout className="main-win">
                    <Header className="main-win__header">
                        <span className="main-win__logo" />

                        <Menu mode="horizontal" className="main-win__top-nav top-nav" onClick={this.topMenuCallbacks}>
                            {topMenuRender}
                        </Menu>
                    </Header>
                    <Layout>
                        <Content></Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>
                <Settings ref="modalSettings" />
            </div>
        );
    }
}
