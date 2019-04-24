import React, { PureComponent } from 'react';

interface IAppHeaderButtonProps {
  children: any;
  onClick?: any;
}

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
      <button type="button" onClick={this.emitClick}>
        {this.props.children}
      </button>
    );
  }
}
