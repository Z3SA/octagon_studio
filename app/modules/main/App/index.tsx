import React, { Component } from 'react';

import { Layout } from 'antd';

import MainMenu from '../MainMenu';

const { Header, Footer, Content } = Layout;

export default class App extends Component {
  public render() {
    return (
      <div>
        <Layout className="main-win">
          <Header className="main-win__header">
            <span className="main-win__logo" />
            <MainMenu />
          </Header>

          <Layout>
            <Content />
          </Layout>

          <Footer />
        </Layout>
      </div>
    );
  }
}
