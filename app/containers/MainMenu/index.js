// Import React components
import React, { Component } from 'react';
// Import Ant D components
import { Menu } from 'antd';

export default class MainMenu extends Component {
    render() {
        return(
            <Menu 
                mode="horizontal" 
                className="main-win__top-nav top-nav" 
                onClick={this.props.eventHandler}
            >
                {
                    this.props.items.map((item) => {
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
            
                        return <Menu.SubMenu title={item.name} key={item.key} children={subItems} />;
                    })
                }
            </Menu>
        );
    }
}