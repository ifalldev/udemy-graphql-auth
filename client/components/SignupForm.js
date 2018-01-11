import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo'

import mutation from '../mutation/Signup';
import query from '../queries/CurrentUser.js';

class SignupForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       errors: []
    }
  }
  
  onSubmitForm({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm errors={this.state.errors} onSubmitForm={this.onSubmitForm.bind(this)}/>
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);
