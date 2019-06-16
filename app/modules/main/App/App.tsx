import React, { PureComponent, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
import AppModalStack from '../AppModalStack/AppModalStack';

const { Content } = Layout;

const ConnectedAppHeader = React.lazy(() =>
  import('modules/main/header/AppHeader/ConnectedAppHeader')
);
const StatusBar = lazy(() => import('modules/main/StatusBar/StatusBar'));
const AppStart = lazy(() => import('../content/AppStart/AppStart'));
const Playground = lazy(() => import('../Playground/Playground'));

/** Main window */
export default class App extends PureComponent {
  public render() {
    return (
      <React.Fragment>
        <Layout className={styles.App}>
          <Suspense fallback={null}>
            <ConnectedAppHeader />
          </Suspense>

          <Layout>
            <Content>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact={true} path="/" component={() => <AppStart />} />
                  <Route path="/playground" component={() => <Playground />} />
                  <Route render={() => <p>Error 1001: Missing route position</p>} />
                </Switch>
              </Suspense>
            </Content>
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
