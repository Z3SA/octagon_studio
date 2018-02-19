const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

function createURL(_path) {
    let fullPath = url.format({
        pathname: path.join(__dirname + _path),
        protocol: 'file:',
        slashes: true
    });

    return fullPath; 
}

// Setting name of app
app.setName("Octagon Modmaking Studio");

// Vars for windows
let mainWindow, intro;

function createWindow() {
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
        }
    });

    const introUrl = createURL('/../static/intro/index.html');

    intro.loadURL(introUrl);

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        icon: createURL('/../src/assets/images/oms_logo-square.png'),
        title: "Octagon Modmaking Studio",
        show: false
    });

    const startUrl = process.env.ELECTRON_START_URL || createURL('/../build/index.html');

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