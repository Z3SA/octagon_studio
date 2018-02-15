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
// const electron = window.require('electron');

// Rendering whole application
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();