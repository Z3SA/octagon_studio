import React, { PureComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Layout from 'antd/lib/layout/layout';

import styles from './App.m.scss';
import AppModalStack from '../AppModalStack/AppModalStack';
import AppStart from '../content/AppStart/AppStart';

const { Content } = Layout;

const ConnectedAppHeader = React.lazy(() =>
  import('modules/main/header/AppHeader/ConnectedAppHeader')
);
const StatusBar = React.lazy(() => import('modules/main/StatusBar/StatusBar'));

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
              <Switch>
                <Route exact={true} path="/" component={AppStart} />
                <Route path="/playground" render={() => <div>kek</div>} />
                <Route render={() => <p>Error 1001: Missing route position</p>} />
              </Switch>
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
