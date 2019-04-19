import React, { Component } from 'react';

import { Layout } from 'antd';

import AppHeader from '../AppHeader/AppHeader';
import styles from './App.m.scss';

const { Footer, Content } = Layout;

export default class App extends Component {
  public render() {
    return (
      <Layout className={styles.App}>
        <AppHeader />

        <Layout>
          <Content />
        </Layout>

        <Footer />
      </Layout>
    );
  }
}
