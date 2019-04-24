import React, { PureComponent } from 'react';
// import cx from 'classnames';

import styles from './OMSIcon.m.scss';
import { EOmsIconIconName } from './OMSIcon.icon-enum';

interface IOMSIconProps {
  icon: EOmsIconIconName;
  size?: number;
  color?: string;
  weight?: 'light' | 'regular' | 'solid';
}

/** COmponent of icon */
export default class OMSIcon extends PureComponent<IOMSIconProps> {
  static defaultProps: IOMSIconProps = {
    icon: null,
    size: 24,
    weight: 'solid',
  };

  render() {
    const { icon, size, color, weight } = this.props;
    return (
      <span
        className={`${styles.OMSIcon} ${styles[`OMSIcon--icon-${icon}-${weight}`]}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    );
  }
}
