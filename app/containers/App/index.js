// Main window
// React components
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
// Ant D components
import { Layout, Menu } from 'antd';
// Octagon data
import { octagon, LANG } from '../../index';
// Main top menu
import MainMenu from './MainMenu';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

let LANG__MAIN_WIN;

export default class App extends Component<Props> {
    render() {
        // Choose lang package of window
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
                        hotkey: "Ctrl+N", key: "file__create", event: null
                    },
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.FILE_LIST.FILE_OPEN,
                        hotkey: "Ctrl+O", key: "file__open", event: null, inWorkDev: true
                    }
                ]
            },
            {
                name: LANG__MAIN_WIN.TOP_MENU.EDIT_NAME,
                key: "edit-menu",
                items: [
                    {
                        name: LANG__MAIN_WIN.TOP_MENU.EDIT_LIST.SETTINGS,
                        hotkey: "F12", key: "edit__settings", event: () => { toggleSettings(true) }
                    }
                ]
            }
        ];

        return (
            <div>
                <Layout className="main-win">
                    <Header className="main-win__header">
                        <span className="main-win__logo" />
                        <MainMenu 
                            // eventHandler={(e) => { e.item.props.event() }} 
                            items={topMenu} 
                            workDevDisabled={true} 
                        />
                    </Header>

                    <Layout>
                        <Content>
                            <Switch></Switch>
                        </Content>
                    </Layout>
                    
                    <Footer></Footer>
                </Layout>
            </div>
        );
    }
}
