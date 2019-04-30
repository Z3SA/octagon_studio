import React, { PureComponent, Suspense } from 'react';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
import AppModalStack from '../AppModalStack/AppModalStack';
const { Footer, Content } = Layout;
const AppHeader = React.lazy(() => import('modules/main/header/AppHeader/AppHeader'));

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

          <Footer />
        </Layout>
        <AppModalStack appModalVisible={true} />
      </React.Fragment>
    );
  }
}
