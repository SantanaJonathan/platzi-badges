import React from 'react';
import ReactDOM from 'react-dom';

//importacion de bootstrap (simple) instalado por npm
import 'bootstrap/dist/css/bootstrap.css';
//modificaciones al bootstrap
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
