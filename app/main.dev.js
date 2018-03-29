/* eslint global-require: 0, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
// Importing electron and menubuilder
import { app, BrowserWindow } from 'electron';
import MenuBuilder from './menu';

// Create main window 
let mainWindow, intro;

// Creating map support to dll in prod
if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
}

// Importing packages from ../node_modules in dev
if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    require('electron-debug')();
    const path = require('path');
    const p = path.join(__dirname, '..', 'app', 'node_modules');
    require('module').globalPaths.push(p);
}

// Setting extensions on WebKit
const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = [
        'REACT_DEVELOPER_TOOLS', // React tools
        'REDUX_DEVTOOLS' // Redux tools
    ];

    return Promise
        .all(extensions.map(name => installer.default(installer[name], forceDownload)))
        .catch(console.log);
};

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// On ready electron window
app.on('ready', async () => {
    // Setting dev extensions in dev mode
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
        await installExtensions();
    }

    if (process.env.NODE_ENV === 'production') {
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
            }
        });

        // Load page with splash screen
        intro.loadURL(`file://${__dirname}/containers/intro/index.html`);

        intro.once('ready-to-show', () => {
            intro.show();
        });
    }

    // Settings of main window
    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        menu: false
    });

    // Page in window
    mainWindow.loadURL(`file://${__dirname}/app.html`);

    // @TODO: Use 'ready-to-show' event
    //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }
        
        if (process.env.NODE_ENV === 'production') {
            // 2,5 sec then main window'll show and splash'll hide
            setTimeout(() => {
                intro.hide();

                mainWindow.show();
                mainWindow.focus();
            }, 2500);
        } else {
            mainWindow.show();
            mainWindow.focus();
        }
    });

    // Cleaning from mem on closing
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Setting menu
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
});
