import React, { PureComponent } from 'react';

import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import Select from 'antd/lib/select';
import Radio from 'antd/lib/radio';
import Input from 'antd/lib/input';

import { TranslateContext } from 'modules/TranslateContext';
import IOMSLDSettings from 'data/common/model/lang/OMSLDSettings.interface';
import ColorPicker from 'components/module/settings/ColorPicker/ColorPicker';

interface ISettingsModalProps {
  visible: boolean;
  onCloseModal: any;
}

export default class SettingsModal extends PureComponent<ISettingsModalProps> {
  static contextType = TranslateContext;

  lang: IOMSLDSettings = this.context.SETTINGS;

  onCancel = (): void => {
    this.props.onCloseModal();
  }

  render() {
    return (
      <Form layout="vertical">
        <Modal
          visible={this.props.visible}
          title={this.lang.TITLE}
          destroyOnClose={true}
          onCancel={this.onCancel}
          footer={[
            <Button key="cancel" onClick={this.onCancel}>
              {this.lang.BOTTOM_BTNS.CANCEL}
            </Button>,
            <Button key="apply">{this.lang.BOTTOM_BTNS.APPLY}</Button>,
            <Button key="ok" type="primary">
              OK
            </Button>,
          ]}
          width={600}
        >
          <Tabs tabPosition="left">
            <Tabs.TabPane tab={this.lang.MENU.INTERFACE} key="interface">
              <Form.Item
                label={this.lang.INTERFACE.LANGUAGE.TITLE}
                extra={this.lang.INTERFACE.LANGUAGE.DESC}
              >
                <Select defaultValue="ru">
                  <Select.Option value="ru">Русский (RU)</Select.Option>
                  <Select.Option value="en">English (EN)</Select.Option>
                  <Select.Option value="pl">Polski (PL)</Select.Option>
                </Select>
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
                <ColorPicker
                  colors={[
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
                  ]}
                  active="1890ff"
                  onChange={e => {
                    console.log(e);
                  }}
                />
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
