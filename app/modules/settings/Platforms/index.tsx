// Tab "Platforms" - Settings window
// Import React
// Import Ant D components
import { Button, message, Table, Tooltip } from 'antd';
import OMSPlatform from 'data/module/platform-manager/OMSPlatform';
import OMSFile from 'data/utils/OMSFile.class';
// Import Octagon data
import { LANG, octagon } from 'index.tsx';
import React, { Component } from 'react';

// Language package of window
let LANG__PLATFORMS: any;

export default class Platforms extends Component {
  public state = {
    platforms: octagon.user.platforms,
  };

  public chooseFolder = () => {
    const path = OMSFile.chooseDir();

    if (path) {
      try {
        if (!OMSFile.exists(`${path}/.oms`)) {
          throw LANG__PLATFORMS.ERROR.FOLDER_IS_NOT_PLATFORM;
        }

        if (!OMSFile.exists(`${path}/.oms/main.omsplatform`)) {
          throw LANG__PLATFORMS.ERROR.FOLDER_HAS_NOT_CFG;
        }

        const newPlatform = new OMSPlatform(`${path}/.oms/main.omsplatform`);
        octagon.user.platforms.forEach(item => {
          if (item.key === newPlatform.platformId) {
            throw LANG__PLATFORMS.ERROR.PLATFORM_IS_DEFINED;
          }
        });

        octagon.user.platforms.push(newPlatform.formToMin());

        this.setState({ platforms: octagon.user.platforms });
      } catch (ex) {
        message.error(ex);
      }
    }
  }

  public render() {
    LANG__PLATFORMS = LANG.SETTINGS.PLATFORMS;

    const columns = [
      {
        dataIndex: 'name',
        title: LANG__PLATFORMS.TABLE_HEADER.NAME,
        key: 'name',
      },
      {
        dataIndex: 'version',
        title: LANG__PLATFORMS.TABLE_HEADER.VERSION,
        key: 'version',
      },
      {
        dataIndex: 'tags',
        title: '',
        key: 'tags',
      },
      {
        dataIndex: 'isValid',
        title: '',
        key: 'isValid',
      },
    ];

    const { platforms } = this.state;

    return (
      <div>
        <Button.Group className="settings-win__platforms-btn">
          <Tooltip placement="top" title={LANG__PLATFORMS.MENU.ADD_NEW}>
            <Button />
          </Tooltip>
          <Tooltip placement="top" title={LANG__PLATFORMS.MENU.ADD_FROM_FOLDER}>
            <Button />
          </Tooltip>
          <Tooltip placement="top" title={LANG__PLATFORMS.MENU.REFRESH}>
            <Button />
          </Tooltip>
        </Button.Group>

        <Table columns={columns} dataSource={platforms} />
      </div>
    );
  }
}
