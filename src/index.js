import React from 'react';
import ReactDOM from 'react-dom';

//importamos la carpeta de componente
import Badge from './components/Badge';

const container = document.getElementById('app');

//hay que darle un componente o elemento <Badge />
ReactDOM.render(<Badge />, container);
