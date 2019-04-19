import React, { PureComponent, Suspense } from 'react';

import { Layout } from 'antd';

import styles from './App.m.scss';
const { Footer, Content } = Layout;
const AppHeader = React.lazy(() => import('../AppHeader/AppHeader'));

export default class App extends PureComponent {
  public render() {
    return (
      <Layout className={styles.App}>
        <Suspense fallback={null}>
          <AppHeader />
        </Suspense>

        <Layout>
          <Content />
        </Layout>

        <Footer />
      </Layout>
    );
  }
}
