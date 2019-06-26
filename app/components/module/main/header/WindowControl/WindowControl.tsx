import React, { PureComponent } from 'react';

import styles from './WindowControl.m.scss';

interface IWindowControlProps {
  children: any;
  onClick?: any;
  isClose?: boolean;
}

/** Window control in main window header */
export default class WindowControl extends PureComponent<IWindowControlProps> {
  constructor(props: any) {
    super(props);
    this.emitClick = this.emitClick.bind(this);
  }

  /** Emit on click of button */
  emitClick(): void {
    this.props.onClick();
  }

  render() {
    const { isClose, children } = this.props;

    return (
      <button
        type="button"
        onClick={this.emitClick}
        className={
          isClose
            ? `${styles.WindowControl} ${styles['WindowControl--close']}`
            : styles.WindowControl
        }
      >
        {children}
      </button>
    );
  }
}
