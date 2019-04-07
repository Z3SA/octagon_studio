/* eslint global-require: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 */
import { app, BrowserWindow } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';

import OMS from './data/module/main/OMS.class';

// Main window
let mainWindow: BrowserWindow;

// Intro splash
let intro: BrowserWindow;

// OMS data
export let oms: OMS;

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(extensions.map(name => installer.default(installer[name], forceDownload))).catch(
    console.log
  );
};

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', async () => {
  // Creating intro splash screen (preloader)
  intro = new BrowserWindow({
    width: 499,
    height: 319,
    center: true,
    frame: false,
    backgroundColor: '#1b1b1b',
    show: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'resources/icon.png'),
  });

  intro.loadURL(`file://${__dirname}/modules/intro/index.html`);

  intro.once('ready-to-show', () => {
    intro.show();
  });

  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  oms = new OMS();
  oms.load();

  mainWindow = new BrowserWindow({
    show: false,
    width: oms.session.winWidth,
    height: oms.session.winHeight,
    autoHideMenuBar: true,
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(`file://${__dirname}/modules/app/index.html`);

  mainWindow.once('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    if (process.env.NODE_ENV === 'development') {
      // Temp decision for develop of splash screen
      setTimeout(() => {
        intro.hide();
        intro.destroy();

        mainWindow.show();
        mainWindow.focus();
      });
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow.destroy();
  });
});
