import React, { PureComponent } from 'react';

import Layout from 'antd/lib/layout';
import Divider from 'antd/lib/divider';
import electron, { BrowserWindow } from 'electron';

import styles from './AppHeader.m.scss';
import OMSIcon from 'components/common/OMSIcon/OMSIcon';
import { EOmsIconIconName } from 'components/common/OMSIcon/OMSIcon.icon-enum';
import WindowControl from 'components/module/main/header/WindowControl/WindowControl';
import Logo from 'components/module/main/header/Logo/Logo';

const { Header } = Layout;

interface IAppHeaderState {
  isWindowMaximized: boolean;
}

/** Header of main window */
export default class AppHeader extends PureComponent<{}, IAppHeaderState> {
  /** Link of main window */
  window: BrowserWindow;

  constructor(props: any) {
    super(props);
    this.window = electron.remote.getCurrentWindow();
    this.state = {
      isWindowMaximized: this.window.isMaximized(),
    };
  }

  /** Close main window */
  closeWindow = () => {
    this.window.close();
  }

  /** Maximize window */
  maximizeOrRestoreWindow = () => {
    const windowIsMaximized = this.window.isMaximized();
    windowIsMaximized ? this.window.restore() : this.window.maximize();
    this.setState({
      isWindowMaximized: !windowIsMaximized,
    });
  }

  /** Minmize window */
  minimizeWindow = () => {
    this.window.minimize();
  }

  public render() {
    return (
      <Header className={styles.AppHeader}>
        <div className={styles.AppHeader__left}>
          <Logo />
        </div>

        <div className={styles.AppHeader__nav}>&nbsp;</div>

        <div className={styles.AppHeader__right}>
          <OMSIcon icon={EOmsIconIconName.settings} size={20} weight="light" />

          <Divider type="vertical" />

          <WindowControl onClick={this.minimizeWindow}>
            <OMSIcon icon={EOmsIconIconName.windowMinimize} size={16} weight="light" />
          </WindowControl>

          <WindowControl onClick={this.maximizeOrRestoreWindow}>
            <OMSIcon
              icon={
                this.state.isWindowMaximized
                  ? EOmsIconIconName.windowRestore
                  : EOmsIconIconName.windowMaximize
              }
              size={16}
              weight="light"
            />
          </WindowControl>

          <WindowControl onClick={this.closeWindow} isClose={true}>
            <OMSIcon icon={EOmsIconIconName.windowClose} size={16} weight="light" />
          </WindowControl>
        </div>
      </Header>
    );
  }
}
