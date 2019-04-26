// Tab "Platforms" - Settings window
// Import React
// Import Ant D components
import { message, Table } from 'antd';
import React, { Component } from 'react';

import OMSFile from 'data/utils/OMSFile.class';

export default class Platforms extends Component {
  public chooseFolder = () => {
    const path = OMSFile.chooseDir();

    if (path) {
      try {
        if (!OMSFile.exists(`${path}/.oms`)) {
          throw new Error('');
        }

        if (!OMSFile.exists(`${path}/.oms/main.omsplatform`)) {
          throw new Error('');
        }
      } catch (ex) {
        message.error(ex);
      }
    }
  }

  public render() {
    const columns = [
      {
        dataIndex: 'name',
        title: 'title',
        key: 'name',
      },
      {
        dataIndex: 'version',
        title: 'title',
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

    return (
      <div>
        <Table columns={columns} />
      </div>
    );
  }
}
