import React, { PureComponent, Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
import AppModalStack from '../AppModalStack/AppModalStack';
import { history } from 'store/configureStore';
import AppStart from '../content/AppStart/AppStart';

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
            <Content>
              <ConnectedRouter history={history}>
                <Switch>
                  <Route exact={true} path="/" component={AppStart} />
                </Switch>
              </ConnectedRouter>
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
