// Tab "Platforms" - Settings window
// Import React
import React, { Component } from 'react';
// Import Ant D components
import { Button, Tooltip, Table, message } from 'antd';
// Import Octagon data
import { octagon, LANG } from '../../index';
// Import Font Awesome
import FAIcon from '@fortawesome/react-fontawesome';
import faAdd from '@fortawesome/fontawesome-free-solid/faAdd';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faRefresh from '@fortawesome/fontawesome-free-solid/faRedo';

// Language package of window
let LANG__PLATFORMS;

export default class Platforms extends Component {
    state = {
        platforms: octagon.user.platforms
    }

    chooseFolder = () => {
        let path = OMSFile.chooseDir();

        if (path) {
            try {
                if ( !OMSFile.exists(path + '/.oms') ) {
                    throw LANG__PLATFORMS.ERROR.FOLDER_IS_NOT_PLATFORM;
                }

                if ( !OMSFile.exists(path + '/.oms/main.omsplatform') ) {
                    throw LANG__PLATFORMS.ERROR.FOLDER_HAS_NOT_CFG;
                }

                let newPlatform = new OMSPlatform(path + '/.oms/main.omsplatform');
            } catch(e) {
                message.error(e.message);
            }
        }
    }

    render() {
        LANG__PLATFORMS = LANG.SETTINGS.PLATFORMS;

        let columns = [
            {
                title: LANG__PLATFORMS.TABLE_HEADER.NAME,
                dataIndex: "name",
                key: "name"    
            },
            {
                title: LANG__PLATFORMS.TABLE_HEADER.VERSION,
                dataIndex: "version",
                key: "version"
            },
            {
                title: "",
                dataIndex: "tags",
                key: "tags"
                render: (text, record) => {
                    console.log(text);
                    console.log(record);
                }
            }
        ]

        return (
            <div>
                <Button.Group className="settings-win__platforms-btn">
                    <Tooltip placement="top" title={LANG__PLATFORMS.MENU.ADD_NEW}>
                        <Button><FAIcon icon={faAdd} /></Button>
                    </Tooltip>
                    <Tooltip placement="top" title={LANG__PLATFORMS.MENU.ADD_FROM_FOLDER}>
                        <Button onClick={this.chooseFolder}><FAIcon icon={faDownload} /></Button>
                    </Tooltip>
                    <Tooltip placement="top" title={LANG__PLATFORMS.MENU.REFRESH}>
                        <Button><FAIcon icon={faRefresh} /></Button>
                    </Tooltip>
                </Button.Group>

                <Table columns={columns} dataSource={this.state.platforms} />
            </div>
        );
    }
}