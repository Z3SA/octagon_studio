import React, { Component } from 'react';

import { Layout } from 'antd';

import MainMenu from '../MainMenu';
import './AppHeader.scss';

const { Header } = Layout;

export default class AppHeader extends Component {
  public render() {
    return (
      <Header className="AppHeader">
        <span className="main-win__logo" />
        <MainMenu />
      </Header>
    );
  }
}
