import React, { PureComponent } from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';

import styles from './AppStart.m.scss';
import { TranslateContext } from 'modules/TranslateContext';
import { IOMSLDMainStart } from 'data/common/model/lang/OMSLDMainStart.interface';

const { Title } = Typography;

export default class AppStart extends PureComponent {
  /** Definition of context type (for translates) */
  static contextType = TranslateContext;

  /** Redefine of language pack for component */
  lang: IOMSLDMainStart = this.context.MAIN_WINDOW.START_FRAME;

  render() {
    return (
      <section className={styles.AppStart}>
        <Row>
          <Col span={12}>
            <Title level={4}>{this.lang.ACTIONS.TITLE}</Title>
          </Col>
        </Row>
      </section>
    );
  }
}
