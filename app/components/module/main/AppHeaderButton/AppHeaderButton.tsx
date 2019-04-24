import React, { PureComponent } from 'react';

import styles from './AppHeaderButton.m.scss';

interface IAppHeaderButtonProps {
  children: any;
  onClick?: any;
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
    return (
      <button type="button" onClick={this.emitClick} className={styles.AppHeaderButton}>
        {this.props.children}
      </button>
    );
  }
}
