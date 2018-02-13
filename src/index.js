// Importing React
import React from 'react';
import ReactDOM from 'react-dom';
// Importing base styles of program
import './index.scss';
// Importing main window
import App from './windows/WinMain';
// Importing register service
import registerServiceWorker from './registerServiceWorker';

const electron = window.require('electron');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();