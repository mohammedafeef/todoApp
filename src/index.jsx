import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
ReactDOM.render(<BrowserRouter>
        <App/>
</BrowserRouter>
    ,document.getElementById('root'));
