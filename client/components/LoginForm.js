import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm';
import mutation from '../mutation/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  onSubmitForm({ email, password }) {
    console.log('login form submit event', email, password, this.props);
     this.props.mutate({ 
      variables: { email, password },
      refetchQueries: [{ query }]
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <AuthForm onSubmitForm={this.onSubmitForm.bind(this)}/>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
