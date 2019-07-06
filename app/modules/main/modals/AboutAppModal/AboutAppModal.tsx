import React, { Component } from 'react';

import Modal from 'antd/lib/modal';
import Typography from 'antd/lib/typography';

import { oms } from 'data/data.init';
import { TranslateContext } from 'modules/global/TranslateContext';
import { IOMSLDAboutAppModal } from 'data/common/model/lang';
import { APP_CONSTS } from 'data/utils/AppConsts.enum';

const { Paragraph } = Typography;

interface IAboutAppModalProps {
  visible: boolean;
  onCloseModal: any;
}

export default class AboutAppModal extends Component<IAboutAppModalProps> {
  /** Definition of context type */
  static contextType = TranslateContext;

  /** Redefenition of language pack */
  lang: IOMSLDAboutAppModal = this.context.MAIN_WINDOW.ABOUT_APP_MODAL;

  render() {
    const { visible, onCloseModal } = this.props;
    return (
      <Modal
        title={this.lang.TITLE}
        visible={visible}
        destroyOnClose={true}
        onCancel={onCloseModal}
        onOk={onCloseModal}
      >
        <Paragraph>{APP_CONSTS.APP_TITLE_NAME}</Paragraph>
        <Paragraph>
          {this.lang.MAJOR_VERSION_LABEL}: {oms.major}
        </Paragraph>
        <Paragraph>
          {this.lang.NUM_AND_TYPE_OF_BUILD}: {oms.version}
        </Paragraph>
        <Paragraph>
          {this.lang.INSTANCE_ID}: {oms.user.appKey}
        </Paragraph>
        <Paragraph>
          {this.lang.USERNAME}: {oms.user.user}
        </Paragraph>
      </Modal>
    );
  }
}
