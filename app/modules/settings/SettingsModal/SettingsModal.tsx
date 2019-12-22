import React, { PureComponent } from 'react';

import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';
import Radio from 'antd/lib/radio';
import Tabs from 'antd/lib/tabs';

import { ColorPicker } from 'components/module/settings';

import { IOMSLDSettings } from 'data/common/model/lang';
import { OMSLanguage } from 'data/module/main';

import { TranslateContext } from 'modules/global/TranslateContext';

import LanguageSelect from './controls/LanguageSelect';

interface ISettingsModalProps {
  visible: boolean;
  onCloseModal: any;
  setLangList: any;
  langList: OMSLanguage[];
  currentLanguage: string;
}

export default class SettingsModal extends PureComponent<ISettingsModalProps> {
  static contextType = TranslateContext;

  lang: IOMSLDSettings = this.context.SETTINGS;

  colorsOfColorPicker = [
    { hex: '#f5222d' },
    { hex: '#fa541c' },
    { hex: '#fa8c16' },
    { hex: '#faad14' },
    { hex: '#fadb14' },
    { hex: '#a0d911' },
    { hex: '#52c41a' },
    { hex: '#13c2c2' },
    { hex: '#1890ff' },
    { hex: '#2f54eb' },
    { hex: '#722ed1' },
    { hex: '#eb2f96' },
    { hex: '#bfbfbf' },
  ];

  onCancel = (): void => {
    this.props.onCloseModal();
  }

  render() {
    const { visible } = this.props;

    const modalFooter = [
      <Button key="cancel" onClick={this.onCancel}>
        {this.lang.BOTTOM_BTNS.CANCEL}
      </Button>,
      <Button key="apply">{this.lang.BOTTOM_BTNS.APPLY}</Button>,
      <Button key="ok" type="primary">
        OK
      </Button>,
    ];

    return (
      <Form layout="vertical">
        <Modal
          visible={visible}
          title={this.lang.TITLE}
          destroyOnClose={true}
          onCancel={this.onCancel}
          footer={modalFooter}
          width={600}
        >
          <Tabs tabPosition="left">
            <Tabs.TabPane tab={this.lang.MENU.INTERFACE} key="interface">
              <Form.Item
                label={this.lang.INTERFACE.LANGUAGE.TITLE}
                extra={this.lang.INTERFACE.LANGUAGE.DESC}
              >
                <LanguageSelect langList={[]} />
              </Form.Item>

              <Form.Item label={this.lang.INTERFACE.THEME.TITLE}>
                <Radio.Group defaultValue="light">
                  <Radio.Button value="light">
                    {this.lang.INTERFACE.THEME.BACKGROUND_COLORS.LIGHT}
                  </Radio.Button>

                  <Radio.Button value="dark">
                    {this.lang.INTERFACE.THEME.BACKGROUND_COLORS.DARK}
                  </Radio.Button>

                  <Radio.Button value="adaptive">
                    {this.lang.INTERFACE.THEME.BACKGROUND_COLORS.ADAPTIVE}
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <ColorPicker colors={this.colorsOfColorPicker} active="1890ff" />
              </Form.Item>
            </Tabs.TabPane>

            <Tabs.TabPane tab={this.lang.MENU.AUTHORITY} key="authority">
              <Form.Item
                label={this.lang.AUTHORITY.USER.TITLE}
                extra={this.lang.AUTHORITY.USER.DESC}
              >
                <Input placeholder={this.lang.AUTHORITY.USER.PLACEHOLDER} />
              </Form.Item>

              <Form.Item
                label={this.lang.AUTHORITY.DEV_TEAM.TITLE}
                extra={this.lang.AUTHORITY.DEV_TEAM.DESC}
              >
                <Input placeholder={this.lang.AUTHORITY.DEV_TEAM.PLACEHOLDER} />
              </Form.Item>
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </Form>
    );
  }
}
