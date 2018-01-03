import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm';
import mutation from '../mutation/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       errors: [],
    }
  }
  
  onSubmitForm({ email, password }) {
     this.props.mutate({ 
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);

      this.setState({ errors });
    }).then(res => {
      console.log('signed up');
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <AuthForm errors={this.state.errors} onSubmitForm={this.onSubmitForm.bind(this)}/>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
