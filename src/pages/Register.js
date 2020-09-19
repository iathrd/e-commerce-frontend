import React, { Component } from 'react';
import FormRegister from '../components/Form/Register';
import NavigationBar from '../components/Navbar/NavigationBar';

class Register extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <FormRegister />
      </>
    );
  }
}

export default Register;
