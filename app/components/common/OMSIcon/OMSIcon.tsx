import React, { PureComponent } from 'react';
// import cx from 'classnames';

import styles from './OMSIcon.m.scss';
import { EOmsIconIconName } from './OMSIcon.icon-enum';

interface IOMSIconProps {
  icon: EOmsIconIconName;
  size?: number;
  color?: string;
  weight?: 'light' | 'regular' | 'solid';
  className?: string;
}

/**
 * Component of icon
 * @attr icon (EOmsIconIconName) - name of icon
 * @attr size (number) - size of icon (default is 24)
 * @attr color (string) - color of icon (default is currentColor)
 * @attr weight ('light' | 'regular' | 'solid') - weight of icon (default is 'solid')
 * @attr className (string) - additional class for icon
 */
export default class OMSIcon extends PureComponent<IOMSIconProps> {
  static defaultProps: IOMSIconProps = {
    icon: null,
    size: 24,
    weight: 'solid',
  };

  render() {
    const { icon, size, color, weight, className } = this.props;

    let mixClass = `${styles.OMSIcon} ${styles[`OMSIcon--icon-${icon}-${weight}`]}`;
    mixClass = className ? `${mixClass} ${className}` : mixClass;

    return (
      <span
        className={mixClass}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    );
  }
}
