import React, { Component } from 'react';

import { Layout } from 'antd';

import './App.scss';
import AppHeader from '../AppHeader/AppHeader';

const { Footer, Content } = Layout;

export default class App extends Component {
  public render() {
    return (
      <Layout className="App">
        <AppHeader />

        <Layout>
          <Content />
        </Layout>

        <Footer />
      </Layout>
    );
  }
}
