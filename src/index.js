import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './windows/WinMain';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();