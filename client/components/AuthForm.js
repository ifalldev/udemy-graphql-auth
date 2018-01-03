import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  onSubmitForm() {
    e.preventDefault();

    console.log('form submited');
  }
  
  render() {
    const { email, password } = this.props;
    return (
      <div className="row">
        <form className="col s8" onSubmit={this.onSubmitForm.bind(this)}>
          <div className="input-field">
            <label>Email</label>
            <input
              value={email}
              onChange={() => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input 
              value={password}
              onChange={() => this.setState({ password: e.target.value})}
            />
          </div>
          <button className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;