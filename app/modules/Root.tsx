import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import App from './main/App/index';

export interface IProps {
  store: any;
}

/**
 * Root component (entry-point of providers and main window UI)
 */
class Root extends React.Component<IProps> {
  public render() {
    const { store } = this.props;
    return (
      <LocaleProvider locale={ru_RU}>
        <Provider store={store}>
          <App />
        </Provider>
      </LocaleProvider>
    );
  }
}

export default hot(Root);
