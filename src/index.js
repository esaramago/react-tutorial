import React from 'react';
import ReactDOM from 'react-dom';
import './scss/variables.scss';
import './scss/reset.scss';
import './scss/base.scss';
import './scss/objects.scss';
import './scss/components.scss';
import './scss/atoms.scss';
import './scss/utilities.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
