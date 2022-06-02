const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js'),
        },
        icon: './assets/icons/icon.png',
        title: 'eTools',
        frame: false,
        resizable: true,
        fullscreenable: true,
        maximizable: true,
        minimizable: true,
        closable: true,
        transparent: false,
        backgroundColor: '#000000',
        titleBarStyle: 'hidden',
        webSecurity: true,
        alwaysOnTop: false,
        center: true,
        skipTaskbar: true,
        show: false,
        loadURL: 'https://etools.ml/'
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    newWindow = new 
});

