import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

//instalacion de ract router-> npm install react-router-dom

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
