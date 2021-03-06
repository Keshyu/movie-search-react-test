import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

serviceWorker.unregister();