import React, { Component } from 'react';

import LocaleProvider from 'antd/lib/locale-provider';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import { TranslateContext } from './TranslateContext';
import { oms } from 'data/data.init';

export default class GlobalProvider extends Component {
  render() {
    return (
      <LocaleProvider locale={ru_RU}>
        <TranslateContext.Provider value={oms.lang.data}>
          {this.props.children}
        </TranslateContext.Provider>
      </LocaleProvider>
    );
  }
}
