// Modal window with program settings
import React, { Component } from 'react';
import { octagon, LANG } from '../../index';
import { Modal, Layout, Icon, Divider, Select, Button, Tabs, Input } from 'antd';
import OMSFile from '../../data/utils/OMSFile';
import OMS from '../../data/app/OMS';
import { paths } from '../../data/paths';

const { Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const settingsDivider = <Divider className="settings-win__divider" />;

// Language package of window
let LANG__SETTINGS;

export default class Settings extends Component {
    // States of window
    state = {
        visible: false,
        language: octagon.lang.abbr,
        author: octagon.user.user,
        devTeam: octagon.user.devTeam
    }
    // Showing modal
    showModal = () => {
        this.setState({ visible: true });
    }
    //Hiding modal
    hideModal = () => {
        this.setState({ visible: false });
    }
    // Change value of language 
    handleLangChange = (value) => {
        this.setState({ language: value });
    }
    // Change value of author
    handleAuthorChange = (e) => {
        this.setState({ author: e.target.value });
    }
    // Change value of dev team that included current user
    handleDevTeamChange = (e) => {
        this.setState({ devTeam: e.target.value });
    }
    // Saving settings
    saveSettings = () => {
        OMS.saveConfig(octagon.version, this.state.language, octagon.buildStatus);
    }
    // Click on button "Apply"
    handleApply = () => {
        this.saveSettings();
    }
    // Click on button "OK"
    handleOk = () => {
        this.saveSettings();
        this.hideModal();
    }

    render() {
        // Link on language pack of window
        LANG__SETTINGS = LANG.SETTINGS;

        // All bottom btns
        let bottomBtns = [
            <Button key="cancel" onClick={this.hideModal}>{LANG__SETTINGS.BOTTOM_BTNS.CANCEL}</Button>,
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
                    onCancel={this.hideModal}
                    footer={bottomBtns}
                    width={800}
                >
                    <Tabs
                        defaultActiveKey="interface"
                        tabPosition="left"
                    >
                        <TabPane 
                            tab={<span><Icon type="layout" /> {LANG__SETTINGS.MENU.INTERFACE}</span>} 
                            key="interface"
                        >
                            <h2>{LANG__SETTINGS.INTERFACE.TITLE}</h2>
                            {settingsDivider}

                            <h4>{LANG__SETTINGS.INTERFACE.LANGUAGE.TITLE}</h4>
                            <Select 
                                style={{ width: 250 }} 
                                defaultValue={this.state.language} 
                                onChange={this.handleLangChange}
                            >
                                {langsOptions}
                            </Select>
                            <p className="settings-win__param-desc">
                                {LANG__SETTINGS.INTERFACE.LANGUAGE.DESC}
                            </p>
                            {settingsDivider}

                            <h4>{LANG__SETTINGS.INTERFACE.THEME.TITLE}</h4>
                            <Select 
                                disabled 
                                style={{ width: 250 }}
                            >
                                {themesOptions}
                            </Select>
                            <p className="settings-win__param-desc">
                                {LANG__SETTINGS.INTERFACE.THEME.DESC}
                            </p>
                            {settingsDivider}
                        </TabPane>

                        <TabPane 
                            tab={<span><Icon type="contacts" /> {LANG__SETTINGS.MENU.AUTHORITY}</span>} 
                            key="authority"
                        >
                            <h2>{LANG__SETTINGS.AUTHORITY.TITLE}</h2>
                            {settingsDivider}

                            <h4>{LANG__SETTINGS.AUTHORITY.USER.TITLE}</h4>
                            <Input 
                                style={{ width: 250 }} 
                                placeholder={LANG__SETTINGS.AUTHORITY.USER.PLACEHOLDER} 
                                value={this.state.author}
                                onChange={this.handleAuthorChange}
                            />
                            <p className="settings-win__param-desc">
                                {LANG__SETTINGS.AUTHORITY.USER.DESC}
                            </p>
                            {settingsDivider}

                            <h4>{LANG__SETTINGS.AUTHORITY.DEV_TEAM.TITLE}</h4>
                            <Input
                                style={{ width: 250 }}
                                placeholder={LANG__SETTINGS.AUTHORITY.DEV_TEAM.PLACEHOLDER}
                                value={this.state.devTeam}
                                onChange={this.handleDevTeamChange}
                            />
                            <p className="settings-win__param-desc">
                                {LANG__SETTINGS.AUTHORITY.DEV_TEAM.DESC}
                            </p>
                            {settingsDivider}
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}