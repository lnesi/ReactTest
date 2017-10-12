import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "material-components-web/dist/material-components-web.css";
import store from './Store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
