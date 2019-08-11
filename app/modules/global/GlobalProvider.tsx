import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';

import LocaleProvider from 'antd/lib/locale-provider';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import { oms } from 'data/data.init';

import { globalHotKeyMap, IGLobalHotkeyResolver } from './hotkeys';
import { TranslateContext } from './TranslateContext';

interface IGlobalProviderProps {
  openSettings?: any;
  children?: any;
}

export default class GlobalProvider extends Component<IGlobalProviderProps> {
  hotkeyResolver: IGLobalHotkeyResolver = {
    OPEN_SETTINGS: this.props.openSettings,
  };

  render() {
    return (
      <LocaleProvider locale={ru_RU}>
        <TranslateContext.Provider value={oms.lang.data}>
          <HotKeys keyMap={globalHotKeyMap} handlers={this.hotkeyResolver}>
            {this.props.children}
          </HotKeys>
        </TranslateContext.Provider>
      </LocaleProvider>
    );
  }
}
