import React, { Component } from 'react';
import './WinMain.scss';
import omsLogo from '../../assets/images/winmain_logo.png';
import Menu from '../../components/Menu';
import StatusBar from '../../components/StatusBar';

let topMenu = [
    {
        type: "item", name: "Файл",
        items: [
            {
                type: "item", name: "Создать...", rightPart: "Ctrl+N"
            },
            {
                type: "item", name: "Открыть...", rightPart: "Ctrl+O"
            },
            {
                type: "item", name: "Закрыть проект", rightPart: "Ctrl+Shift+W"
            },
            {
                type: "item", name: "Недавние проекты"
            }
        ]
    },
    {
        type: "item", name: "Редактирование"
    }
],
    statusInfo = {
    name: "Octagon Modmaking Studio",
    version: "Mk 0",
    buildStatus: "pre-alpha",
    currentStatus: "Стартовый экран"
}

export default class WinMain extends Component {
    render() {
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