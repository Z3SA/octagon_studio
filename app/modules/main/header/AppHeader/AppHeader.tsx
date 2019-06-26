import React, { PureComponent } from 'react';
import electron, { BrowserWindow } from 'electron';

import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';

import styles from './AppHeader.m.scss';
import OMSIcon from 'components/common/OMSIcon/OMSIcon';
import { EOmsIconIconName } from 'components/common/OMSIcon/OMSIcon.icon-enum';
import WindowControl from 'components/module/main/header/WindowControl/WindowControl';
import MainMenu from 'components/module/main/header/MainMenu/MainMenu';
import { APP_CONSTS } from 'data/utils/AppConsts.enum';
import ConnectedLogo from '../Logo/ConnectedLogo';

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
