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
import path from 'path';
import { app, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';

import paths from './data/paths';
import OMSFile from './data/utils/OMSFile';

// Create main window
let mainWindow: BrowserWindow;

let intro: BrowserWindow;

// Loading session val
const sessionPath = paths.appData + paths.session;
const session = OMSFile.readJSON(sessionPath);

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

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  // Intro will be shown only in production mode
  if (process.env.NODE_ENV === 'development') {
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
        nodeIntegration: false
      },
      icon: path.join(__dirname, 'resources/icon.png')
    });

    // Load page with splash screen
    intro.loadURL(`file://${__dirname}/containers/intro/index.html`);

    // Show intro
    intro.once('ready-to-show', () => {
      intro.show();
    });
  }

  // Settings of main window
  mainWindow = new BrowserWindow({
    show: false,
    width: session.width,
    height: session.height,
    autoHideMenuBar: true
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // Setting main window to visible
  mainWindow.once('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    if (process.env.NODE_ENV === 'development') {
      // 2,5 sec then main window'll show and splash'll hide
      setTimeout(() => {
        intro.hide();
        intro.destroy();

        mainWindow.show();
        mainWindow.focus();
      }, 2500);
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow.destroy();
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
});
