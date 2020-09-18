//1-creando tipo de elemento
// const element = document.createElement('h1');
//2-que se coloca al elemento
// element.innerText = 'Hello, Platzi Badges!';

//contenedor del id en index.html dentro de body
// const container = document.getElementById('app');

//agregando el elemento al container
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//paso 1 y 2-> esto jsx  se debe importar react
const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué queremos renderizar__, __dónde lo queremos renderizar__);
ReactDOM.render(element, container);
