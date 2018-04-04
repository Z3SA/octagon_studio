// Modal window with program settings
import React, { Component } from 'react';
import { octagon, LANG } from '../../index';
import { Modal, Layout, Menu, Icon, Divider, Select, Button } from 'antd';
import OMSFile from '../../data/utils/OMSFile';
import { paths } from '../../data/paths';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;

// Language package of window
let LANG__SETTINGS;

export default class Settings extends Component {
    // States of window
    state = {
        visible: false,
        language: octagon.lang.abbr
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleApply = () => {
        
    }

    handleOk = () => {
        this.setState({ visible: false });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        // Link on language pack of window
        LANG__SETTINGS = LANG.SETTINGS;

        // Items of left menu 
        let menuItems = [
            {
                key: "interface",
                icon: "layout",
                text: LANG__SETTINGS.MENU.INTERFACE
            },
            {
                key: "authority",
                icon: "team",
                text: LANG__SETTINGS.MENU.AUTHORITY
            }
        ],

        // Render of items of left menu
        menuItemsRender = menuItems.map((item) => (
            <MenuItem key={item.key}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
            </MenuItem>
        )),

        // All bottom btns
        bottomBtns = [
            <Button key="back" onClick={this.handleCancel}>{LANG__SETTINGS.BOTTOM_BTNS.CANCEL}</Button>,
            <Button key="apply" onClick={this.handleApply}>{LANG__SETTINGS.BOTTOM_BTNS.APPLY}</Button>,
            <Button key="OK" type="primary" onClick={this.handleOk}>OK</Button>
        ];

        // Getting data about all languages for choosing other languages
        const langPath = paths.appData + paths.langsFolder + '/';

        let languagesFiles = OMSFile.readDir(langPath),
        langsInfo = [],
        languages = languagesFiles.map((item) => {
            langsInfo.push(OMSFile.readJSON(langPath + item).INFO)
        }),
        langsOptions = langsInfo.map((item) => <Select.Option key={item.ABBR} isCompleted={(item.IS_COMPLETED == 'true')} value={item.ABBR}>{item.NAME}</Select.Option>);

        // Theme variants
        let themesInfo = [
            {
                name: "Стандартная",
                key: "default"
            },
            {
                name: "Белая",
                key: "White"
            }
        ],
        // Render of theme variants
        themesOptions = themesInfo.map((item) => {
            return <Select.Option key={item.key}>{item.name}</Select.Option>
        });

        return(
            <div>
                <Modal 
                    title={LANG__SETTINGS.TITLE}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={bottomBtns}
                    width={800}
                >
                    <Layout>
                        <Sider>
                            <Menu 
                                onClick={this.handleClick} 
                                mode="inline" 
                                className="settings-win__menu"
                            >
                                {menuItemsRender}
                            </Menu>
                        </Sider>

                        <Content className="settings-win__cont">
                            <div>
                                <h2>{LANG__SETTINGS.INTERFACE.TITLE}</h2>
                                <Divider className="settings-win__divider" />

                                <h4>{LANG__SETTINGS.INTERFACE.LANGUAGE.TITLE}</h4>
                                <Select style={{ width: 250 }} defaultValue={this.state.language}>
                                    {langsOptions}
                                </Select>
                                <Divider className="settings-win__divider" />

                                <h4>{LANG__SETTINGS.INTERFACE.THEME.TITLE}</h4>
                                <Select disabled style={{ width: 250 }}>
                                    {themesOptions}
                                </Select>
                                <Divider className="settings-win__divider" />
                            </div>
                        </Content>
                    </Layout>
                </Modal>
            </div>
        );
    }
}