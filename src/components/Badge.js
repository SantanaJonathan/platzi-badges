import React from 'react';
//solo imortandolo->webpack junto a css solito se sabe como se inserta
import './styles/Badge.css';
//importandolo en una variable
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      //se debe utilizar className para poner clases para trabajar con css
      //y no class porque es palabra reservada para un componente
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/93d48794fc8de445f97d845ae36f4e4a?s=80"
            alt="Avatar"
          />
          <h1>
            Jonathan <br /> Santana
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@SqJonathan</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
