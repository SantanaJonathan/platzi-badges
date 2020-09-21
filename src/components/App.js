import React from 'react';
//importando 1er componente de react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
  return (
    <BrowserRouter>
      {/*2do componente, va a tomar la direccion que esta en el navegador
      y tomar una, la 1ra q coincida*/}
      <Switch>
        {/*3er componente debe especificar con exact*/}
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
