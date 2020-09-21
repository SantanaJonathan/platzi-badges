import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
  state = {
  //propiedad form -> se debe inicializar
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    //1ra forma para impedir la sobre-escritura
    //const nextForm = this.state.form
    //nextForm[e.target.name] = e.target.value
    this.setState({
      //de la 1ra forma
      //form:nextForm,
      form: {
        //segunda forma->dejo caer todos los valores que tiene el form anteiormente
        ...this.state.form,
        //añadimo/le pasamos del evento que ocurre con nombre y valor
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              {/*antes firstName= "Jonathan" ahora firstName={this.state.form.firstName}
              para que lo presente en el badge cuando cambie el estado*/}
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            {/*se le pasa como un pro en badgeForm onChange'
            manejo el evento handleChange dentro BadgeForm//
            Pasamos el formulario del badgeForm al BadgeNew (formValues:)*/}
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
