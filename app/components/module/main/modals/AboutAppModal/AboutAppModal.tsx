import React, { PureComponent } from 'react';

import Modal from 'antd/lib/modal';
import Typography from 'antd/lib/typography';

import { oms } from 'data/data.init';
import { TranslateContext } from 'modules/Root';
import IOMSLDAboutAppModal from 'data/common/model/lang/OMSLDAboutAppModal.interface';
import { APP_CONSTS } from 'data/utils/AppConsts.enum';

const { Paragraph } = Typography;

interface IAboutAppModalProps {
  visible: boolean;
}

interface IAboutAppModalState {
  visible: boolean;
}

export default class AboutAppModal extends PureComponent<
  IAboutAppModalProps,
  IAboutAppModalState
> {
  /** Definition of context type */
  static contextType = TranslateContext;

  /** Default state */
  state: Readonly<IAboutAppModalState> = {
    visible: this.props.visible,
  };

  /** Redefenition of language pack */
  lang: IOMSLDAboutAppModal = this.context.MAIN_WINDOW.ABOUT_APP_MODAL;

  render() {
    return (
      <Modal title={this.lang.TITLE} visible={this.state.visible}>
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
