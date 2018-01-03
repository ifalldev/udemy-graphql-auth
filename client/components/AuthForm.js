import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  onSubmitForm(event) {
    event.preventDefault();

    console.log('form submited', this.state);
    this.props.onSubmitForm(this.state);
  }
  
  render() {
    const { email, password } = this.props;
    return (
      <div className="row">
        <form className="col s8" onSubmit={this.onSubmitForm.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value})}
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