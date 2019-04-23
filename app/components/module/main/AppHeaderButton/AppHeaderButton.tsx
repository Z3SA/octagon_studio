import React, { PureComponent } from 'react';

interface IAppHeaderButtonProps {
  children: any;
}

export default class AppHeaderButton extends PureComponent<IAppHeaderButtonProps> {
  render() {
    return <button type="button">{this.props.children}</button>;
  }
}
