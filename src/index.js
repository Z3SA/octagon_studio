import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './windows/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();