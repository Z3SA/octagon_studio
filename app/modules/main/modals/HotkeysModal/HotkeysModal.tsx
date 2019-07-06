import React, { PureComponent } from 'react';

import Modal from 'antd/lib/modal';
import Table, { ColumnProps } from 'antd/lib/table';

import { TranslateContext } from 'modules/global/TranslateContext';
import { IOMSLDModalHotkeys } from 'data/common/model/lang';
import styles from './HotkeysModal.m.scss';

interface IHotkeysModalProps {
  visible: boolean;
  onCloseModal: any;
}

interface IHotkey {
  key: string;
  action: string;
  hotkey: string;
}

export default class HotkeysModal extends PureComponent<IHotkeysModalProps> {
  static contextType = TranslateContext;

  lang: IOMSLDModalHotkeys = this.context.MAIN_WINDOW.MODALS.HOTKEYS;

  columns: Array<ColumnProps<IHotkey>> = [
    {
      title: this.lang.ACTION_LABEL,
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: this.lang.HOTKEY_LABEL,
      dataIndex: 'hotkey',
      key: 'hotkey',
    },
  ];

  data: IHotkey[] = [
    {
      key: 'open_settings',
      action: this.lang.ACTIONS.OPEN_SETTINGS,
      hotkey: 'F12',
    },
  ];

  render() {
    return (
      <Modal
        title={this.lang.TITLE}
        visible={this.props.visible}
        onCancel={this.props.onCloseModal}
        footer={false}
        width={600}
      >
        <div className={styles.HotkeysModal__cont}>
          <Table<IHotkey>
            columns={this.columns}
            dataSource={this.data}
            pagination={false}
          />
        </div>
      </Modal>
    );
  }
}
