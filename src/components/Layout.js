import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    //es una herramienta para evitar esos div innecesarios
    <React.Fragment>
      <Navbar />
      {/*para evaluar los props internamente (children)*/}
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
