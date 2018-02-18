import React, { Component } from 'react';
import './WinMain.scss';
import omsLogo from '../../assets/images/winmain_logo.png';
import Menu from '../../components/Menu';
import StatusBar from '../../components/StatusBar';
import { octagon } from '../../index';

export default class WinMain extends Component {
    render() {
        let WIN_LANG = octagon.lang.data.MAIN_WINDOW;

        let topMenu = [
            {
                type: "item", name: WIN_LANG.TOP_MENU.FILE_NAME,
                items: [
                    {
                        type: "item", name: WIN_LANG.TOP_MENU.FILE_LIST.FILE_CREATE, rightPart: "Ctrl+N"
                    },
                    {
                        type: "item", name: WIN_LANG.TOP_MENU.FILE_LIST.FILE_OPEN, rightPart: "Ctrl+O"
                    },
                    {
                        type: "item", name: WIN_LANG.TOP_MENU.FILE_LIST.CLOSE_PROJECT, rightPart: "Ctrl+Shift+W"
                    },
                    {
                        type: "item", name: WIN_LANG.TOP_MENU.FILE_LIST.RECENT_PROJECTS
                    }
                ]
            },
            {
                type: "item", name: WIN_LANG.TOP_MENU.EDIT_NAME
            }
        ],
            statusInfo = {
            name: "Octagon Modmaking Studio",
            version: octagon.version,
            buildStatus: octagon.buildStatus,
            currentStatus: WIN_LANG.STATUS_BAR.CURRENT_FOCUS.START_FRAME
        };

        return (
            <main className="win">
                <header className="cont WinMain__header main-header">
                    <img className="main-header__logo" src={omsLogo} alt="Octagon Modmaking Studio" />
                    <Menu dir="horizontal" parent="main-header" items={topMenu} />
                </header>

                <section className="cont WinMain__cont main-cont"></section>

                <StatusBar 
                    parent="WinMain" 
                    items={[
                        statusInfo.name + " " + statusInfo.version,
                        statusInfo.buildStatus,
                        statusInfo.currentStatus
                    ]}
                />
            </main>
        );
    }
}