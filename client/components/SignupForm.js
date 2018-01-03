import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo'

import mutation from '../mutation/Signup';

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AutoForm />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);
