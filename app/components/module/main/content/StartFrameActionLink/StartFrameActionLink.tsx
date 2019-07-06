import React, { PureComponent } from 'react';

import Button from 'antd/lib/button';

import OMSIcon from 'components/common/OMSIcon/OMSIcon';
import { EOmsIconIconName } from 'components/common/OMSIcon/OMSIcon.icon.enum';
import styles from './StartFrameActionLink.m.scss';

interface IStartFrameActionLinkProps {
  icon: EOmsIconIconName;
  label: string;
  onClick?: any;
}

/**
 * Link with action on start frame (section "Start work")
 * @attr icon (EOmsIconIconName) - icon in link
 * @attr label (string) - link text
 * @attr onClick - event on click of link
 */
export default class StartFrameActionLink extends PureComponent<
  IStartFrameActionLinkProps
> {
  render() {
    const { icon, label, onClick } = this.props;

    return (
      <Button className={styles.StartFrameActionLink} type="link" onClick={onClick}>
        <OMSIcon
          className={styles.StartFrameActionLink__icon}
          icon={icon}
          weight={'light'}
        />
        {label}
      </Button>
    );
  }
}
