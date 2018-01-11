import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router';

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
  
  componentWillUpdate(nextProps) {
    // this.props - old/current props
    // nextProps - new props
    if (!this.props.data.user && nextProps.data.user) {
      // redirect to dashboard
      hashHistory.push('/dashboard');
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
        <h3>Login</h3>

        <AuthForm errors={this.state.errors} onSubmitForm={this.onSubmitForm.bind(this)}/>
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
);
