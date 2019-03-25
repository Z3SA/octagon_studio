import React from 'react';
import { Provider } from 'react-redux';

import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import App from './main/App/index';

export interface Props {
  store: any;
}

/**
 * Root component (entry-point of providers and main window UI)
 */
export default class Root extends React.Component<Props> {
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
