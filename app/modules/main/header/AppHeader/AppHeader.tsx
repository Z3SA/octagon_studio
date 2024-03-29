import electron, { BrowserWindow } from 'electron';
import React, { PureComponent } from 'react';

import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';

import OMSIcon, { EOmsIconIconName } from 'components/common/OMSIcon';
import { MainMenu, WindowControl } from 'components/module/main/header';

import { APP_CONSTS } from 'data/utils';

import ConnectedLogo from '../Logo/ConnectedLogo';
import styles from './AppHeader.m.scss';

const { Header } = Layout;

interface IAppHeaderProps {
  onClickSettingsButton: any;
}

interface IAppHeaderState {
  isWindowMaximized: boolean;
}

/** Header of main window */
export default class AppHeader extends PureComponent<IAppHeaderProps, IAppHeaderState> {
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
          <ConnectedLogo />
        </div>

        <div className={styles.AppHeader__center}>
          <MainMenu />
          <div className={styles['AppHeader__window-title']}>
            {APP_CONSTS.APP_TITLE_NAME}
          </div>
        </div>

        <div className={styles.AppHeader__right}>
          <Button
            type="link"
            className={styles['AppHeader__settings-button']}
            onClick={this.props.onClickSettingsButton}
          >
            <OMSIcon icon={EOmsIconIconName.settings} size={20} weight="light" />
          </Button>

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
