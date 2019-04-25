import React, { PureComponent } from 'react';

import Layout from 'antd/lib/layout';
import Divider from 'antd/lib/divider';
import electron, { BrowserWindow } from 'electron';

import styles from './AppHeader.m.scss';
import OMSIcon from 'components/common/OMSIcon/OMSIcon';
import { EOmsIconIconName } from 'components/common/OMSIcon/OMSIcon.icon-enum';
import AppHeaderButton from 'components/module/main/AppHeaderButton/AppHeaderButton';

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
          <span className={styles.AppHeader__logo} />
        </div>

        <div className={styles.AppHeader__nav}>&nbsp;</div>

        <div className={styles.AppHeader__right}>
          <OMSIcon icon={EOmsIconIconName.settings} size={20} weight="light" />

          <Divider type="vertical" />

          <AppHeaderButton onClick={this.minimizeWindow}>
            <OMSIcon icon={EOmsIconIconName.windowMinimize} size={16} weight="light" />
          </AppHeaderButton>

          <AppHeaderButton onClick={this.maximizeOrRestoreWindow}>
            <OMSIcon
              icon={
                this.state.isWindowMaximized
                  ? EOmsIconIconName.windowRestore
                  : EOmsIconIconName.windowMaximize
              }
              size={16}
              weight="light"
            />
          </AppHeaderButton>

          <AppHeaderButton onClick={this.closeWindow} isClose={true}>
            <OMSIcon icon={EOmsIconIconName.windowClose} size={16} weight="light" />
          </AppHeaderButton>
        </div>
      </Header>
    );
  }
}
