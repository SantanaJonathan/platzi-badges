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
//const jsx = <h1>Hello, Platzi Badges!</h1>;

//(h1->tipo de eleemnto, {}->los atributos(propierties), 'hola..'->el contenido)
//const element= React.createElement('a', { href: 'https://platzi.com' } , 'Ir a platzi');

const name= 'Angela'
//agregando variables
//const element= React.createElement('h1', { } , `Hola, soy ${name} `);
const sum = () => 3 + 3;

//En jsx para agregar variabels/ si en expresionees van null undefined no se veran la pagina
//const jsx = <h1>Hola soy, {_expresiones_} </h1>;
//const jsx = <h1>Hola soy, {sum()} </h1>;

const jsx = (//es axucar sintetica
  <div>
    <h1>Hola soy un Jonathan</h1>
    <p>Soy ingeniero fronted</p>
  </div>
);
//React es javascript//jsx->webpack con ayuda de babel a traves de react-app lo interpreta
const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{},'Hola soy Jonathan'),
  React.createElement('p',{}, 'Soy ingeniro de la web.')
);

const container = document.getElementById('app');

// ReactDOM.render(__qué queremos renderizar__, __dónde lo queremos renderizar__);
ReactDOM.render(element, container);
