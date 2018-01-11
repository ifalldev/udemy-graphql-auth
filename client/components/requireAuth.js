import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import currentUserQuery from '../queries/CurrentUser';

export default (WrappedComponent) => 
  class RequireAuth extends Components {
    componentDidMount() {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return grapqh(currentUserQuery)(RequireAuth);
}
