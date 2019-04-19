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
import path from 'path';
import OMSWindowSession from './data/module/main/OMSWindowSession.class';

// Main window
let mainWindow: BrowserWindow;

// Intro splash
let intro: BrowserWindow;

const omsWindowSession = new OMSWindowSession();

if (process.env.NODE_ENV === 'production') {
  // tslint:disable-next-line:no-var-requires
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  // tslint:disable-next-line:no-var-requires
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
    transparent: true,
    show: false,
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: false,
      devTools: false,
    },
    icon: path.join(__dirname, 'resources/icon.png'),
  });

  intro.loadURL(`file://${__dirname}/modules/intro/index.html`);

  intro.once('ready-to-show', () => {
    intro.show();
    intro.focus();
  });

  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: omsWindowSession.winWidth,
    height: omsWindowSession.winHeight,
    autoHideMenuBar: true,
    frame: false,
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(`file://${__dirname}/modules/app/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
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

  mainWindow.on('close', () => {
    const { width, height, x, y } = mainWindow.getBounds();

    omsWindowSession.winWidth = width;
    omsWindowSession.winHeight = height;
    omsWindowSession.winX = x;
    omsWindowSession.winY = y;
    omsWindowSession.saveSession();
  });
});
