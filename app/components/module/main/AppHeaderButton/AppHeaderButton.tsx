import React, { PureComponent } from 'react';

import styles from './AppHeaderButton.m.scss';

interface IAppHeaderButtonProps {
  children: any;
  onClick?: any;
  isClose?: boolean;
}

/** Window control in main window header */
export default class AppHeaderButton extends PureComponent<IAppHeaderButtonProps> {
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
            ? `${styles.AppHeaderButton} ${styles['AppHeaderButton--close']}`
            : styles.AppHeaderButton
        }
      >
        {children}
      </button>
    );
  }
}
