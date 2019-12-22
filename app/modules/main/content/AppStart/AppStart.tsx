import React, { PureComponent } from 'react';

import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Typography from 'antd/lib/typography';

import { EOmsIconIconName } from 'components/common/OMSIcon';
import { StartFrameActionLink } from 'components/module/main/content';

import { IOMSLDMainStart } from 'data/common/model/lang';

import { TranslateContext } from 'modules/global/TranslateContext';

import styles from './AppStart.m.scss';

const { Title } = Typography;

export default class AppStart extends PureComponent {
  /** Definition of context type (for translates) */
  static contextType = TranslateContext;

  /** Redefine of language pack for component */
  lang: IOMSLDMainStart = this.context.MAIN_WINDOW.START_FRAME;

  render() {
    const { lang } = this;
    return (
      <section className={styles.AppStart}>
        <Row>
          <Col span={12}>
            <Title level={4}>{lang.ACTIONS.TITLE}</Title>
            <StartFrameActionLink
              icon={EOmsIconIconName.platformAdd}
              label={lang.ACTIONS.ADD_OR_IMPORT_PLATFORM}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
