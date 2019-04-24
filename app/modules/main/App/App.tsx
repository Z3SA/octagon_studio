import React, { PureComponent, Suspense } from 'react';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
const { Footer, Content } = Layout;
const AppHeader = React.lazy(() => import('modules/main/AppHeader/AppHeader'));

/** Main window */
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
