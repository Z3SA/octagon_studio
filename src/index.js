// Importing React
import React from 'react';
import ReactDOM from 'react-dom';
// Importing base styles of program
import './index.scss';
// Importing main window
import App from './windows/WinMain';
// Importing register service
import registerServiceWorker from './registerServiceWorker';
import OMS from './data/app/OMS';

// Link to electron libs for working with OS
// export const electron = window.require('electron');
// export const { app } = window.require('electron').remote;
// export const fs = electron.remote.require('fs');
// export const ipcRenderer = electron.ipcRenderer;

export const octagon = new OMS();

// Rendering whole application
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();