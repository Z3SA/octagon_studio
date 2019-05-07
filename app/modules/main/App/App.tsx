import React, { PureComponent, Suspense } from 'react';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
import AppModalStack from '../AppModalStack/AppModalStack';
const { Content } = Layout;

const AppHeader = React.lazy(() => import('modules/main/header/AppHeader/AppHeader'));
const StatusBar = React.lazy(() => import('modules/main/StatusBar/StatusBar'));

/** Main window */
export default class App extends PureComponent {
  public render() {
    return (
      <React.Fragment>
        <Layout className={styles.App}>
          <Suspense fallback={null}>
            <AppHeader />
          </Suspense>

          <Layout>
            <Content />
          </Layout>

          <Suspense fallback={null}>
            <StatusBar />
          </Suspense>
        </Layout>
        <AppModalStack appModalVisible={true} />
      </React.Fragment>
    );
  }
}
