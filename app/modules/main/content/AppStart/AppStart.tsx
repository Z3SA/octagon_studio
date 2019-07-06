import React, { PureComponent } from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';

import styles from './AppStart.m.scss';
import { TranslateContext } from 'modules/global/TranslateContext';
import { IOMSLDMainStart } from 'data/common/model/lang';
import { StartFrameActionLink } from 'components/module/main/content';
import { EOmsIconIconName } from 'components/common/OMSIcon';

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
