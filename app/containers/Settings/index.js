// Modal window with program settings
// Importing React
import React, { Component } from 'react';
// Importing Ant D components
import { Modal, Layout, Icon, Divider, Select, Button, Tabs, Input, message, Tooltip, Table } from 'antd';
// Importing other components
import TabLabel from '../../components/TabLabel';
import SettingsParameter from '../../components/SettingsParameter';
import Platforms from './Platforms';
// Importing Octagon classes and data
import { octagon, LANG } from '../../index';
import OMSFile from '../../data/utils/OMSFile';
import OMS from '../../data/app/OMS';
import OMSUser from '../../data/app/OMSUser';
import { paths } from '../../data/paths';
import OMSPlatform from '../../data/content/OMSPlatform';
// Importing Font Awesome
import faPlatforms from '@fortawesome/fontawesome-free-solid/faInbox';
import faAuthority from '@fortawesome/fontawesome-free-solid/faAddressCard';
import faInterface from '@fortawesome/fontawesome-free-solid/faWindowRestore';

import FAIcon from '@fortawesome/react-fontawesome';
import faAdd from '@fortawesome/fontawesome-free-solid/faPlus';
import faLoad from '@fortawesome/fontawesome-free-solid/faDownload';
import faRefresh from '@fortawesome/fontawesome-free-solid/faRedo';

const { Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const settingsDivider = <Divider className="settings-win__divider" />;
const ButtonGroup = Button.Group;

// Language package of window
let LANG__SETTINGS;

type Props = {
    winVisible: boolean
}

type State = {
    winVisible: boolean
}

export default class Settings extends Component<Props> {
    props: Props;

    // States of window
    state = {
        visible: this.props.winVisible,
        language: octagon.lang.abbr,
        author: octagon.user.user,
        devTeam: octagon.user.devTeam,
        platforms: octagon.user.platforms
    }
    // Showing modal
    showModal = () => {
        this.setState({ visible: true });
    }
    //Hiding modal
    hideModal = () => {
        this.setState({ visible: false });
    }
    // Saving settings
    saveSettings = () => {
        OMS.saveConfig(octagon.version, this.state.language, octagon.buildStatus);
        OMSUser.saveUser(this.state.author, this.state.devTeam, this.state.platforms, octagon.user.appKey);
        message.success(LANG__SETTINGS.STATUS.SUCCESS, 3);        
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

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.winVisible
        });
    }

    render() {
        console.log(this.props.winVisible);
        // Link on language pack of window
        LANG__SETTINGS = LANG.SETTINGS;

        // All bottom btns
        let bottomBtns = [
            <Button key="cancel" onClick={this.hideModal}>{LANG__SETTINGS.BOTTOM_BTNS.CANCEL}</Button>,
            <Button key="OK" type="primary" onClick={this.handleOk}>Создать</Button>
        ];

        // Getting data about all languages for choosing other languages
        const langPath = paths.appData + paths.langsFolder + '/';

        let languagesFiles = OMSFile.readDir(langPath),
        langsInfo = [],
        languages = languagesFiles.map((item) => {
            langsInfo.push(OMSFile.readJSON(langPath + item).INFO)
        }),
        langsOptions = langsInfo.map((item) => <Select.Option key={item.ABBR} isCompleted={(item.IS_COMPLETED == 'true')} value={item.ABBR}>{item.NAME}</Select.Option>);

        // Platforms table - columns
        let platformsDataColumns = [
            {
                title: LANG__SETTINGS.PLATFORMS.TABLE_HEADER.NAME,
                dataIndex: "name",
                key: "name"    
            },
            {
                title: LANG__SETTINGS.PLATFORMS.TABLE_HEADER.VERSION,
                dataIndex: "version",
                key: "version"
            },
            {
                title: "",
                dataIndex: "tags",
                key: "tags"
            }
        ],

        platformsData = [
            {
                key: "1",
                title: "Call of Pripyat",
                version: "1.6.02",
                tags: ""
            },
            {
                key: "2",
                title: "Call of Chernobyl",
                version: "1.5",
                tags: ""
            },
            {
                key: "3",
                title: "xrOxygen",
                version: "0.3",
                tags: ""
            }
        ];

        return(
            <Modal 
                title="Создать проект"
                visible={true}
                onCancel={this.hideModal}
                footer={bottomBtns}
                width={600}
            >
                <SettingsParameter title="Название проекта">
                    <Input 
                        style={{ width: 250 }}
                        onChange={(e) => { this.setState({ author: e.target.value }) }}
                    />
                </SettingsParameter>

                <SettingsParameter title="Описание проекта">
                    <Input 
                        style={{ width: 250 }}
                        onChange={(e) => { this.setState({ author: e.target.value }) }}
                    />
                </SettingsParameter>

                <SettingsParameter title="Каталог проекта">
                    <Input 
                        style={{ width: 250 }}
                        onChange={(e) => { this.setState({ author: e.target.value }) }}
                    />
                    {"  "}
                    <Button onClick={this.chooseFolder}><FAIcon icon={faLoad} /></Button>
                </SettingsParameter>
            </Modal>
        );
    }
}