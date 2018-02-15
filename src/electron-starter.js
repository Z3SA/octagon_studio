const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    intro = new BrowserWindow({
        width: 499,
        height: 319,
        center: true,
        frame: false,
        backgroundColor: '#1b1b1b',
        show: false
    });

    const introUrl = url.format({
        pathname: path.join(__dirname, '/../static/intro/index.html'),
        protocol: 'file:',
        slashes: true
    });

    intro.loadURL(introUrl);

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        icon: __dirname + "/images/oms_logo-square.ico",
        title: "Octagon Modmaking Studio",
        icon: path.join(__dirname, '../images/oms_logo-square.png'),
        show: false
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.setMenu(null);
    mainWindow.loadURL(startUrl);

    mainWindow.webContents.openDevTools();

    intro.once('ready-to-show', () => {
        intro.show();
    });

    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            intro.hide();
            mainWindow.show();
        }, 3500);
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});