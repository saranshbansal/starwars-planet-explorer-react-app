import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './shared/store.js';
import App from './modules/container/App.js';
import './assets/css/app.css';
import './assets/css/error-page.css';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';

window._app_container = document.getElementById('root');

//  wrap whole app in Provider so every component has access to the store
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="fluidContainer">
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    window._app_container
)
registerServiceWorker();
