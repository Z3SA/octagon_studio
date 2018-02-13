import React, { Component } from 'react';
import './WinMain.scss';
import omsLogo from '../../assets/images/winmain_logo.png';
import Menu from '../../components/Menu';

let topMenu = [
    {
        type: "item",
        name: "Файл",
        items: [
            {
                type: "item",
                name: "Создать..."
            }
        ]
    },
    {
        type: "item",
        name: "Редактирование"
    }
];

export default class WinMain extends Component {
    render() {
        return (
            <main className="win">
                <header className="cont WinMain__header main-header">
                    <img className="main-header__logo" src={omsLogo} alt="Octagon Modmaking Studio" />
                    <Menu dir="horizontal" parent="main-header" items={topMenu} />
                </header>
            </main>
        );
    }
}