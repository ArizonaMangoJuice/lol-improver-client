import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import { login } from '../../actions/auth'
import Input from '../Input';

export class UpdateLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  onLoginSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    let password = this.props.password
    let emailAddress = this.props.emailAddress

    return (
      <div className='login-container'>
        <form onSubmit={this.props.handleSubmit(values => this.onLoginSubmit(values))}>
          <label>
            <p className={`${emailAddress ? 'signed-up-email-address form-p' : 'form-p'}`}>Email Adress:</p>
            <input
              className={`${emailAddress ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
              type='text'
              name='Email'
              onClick={() => this.props.raiseEmail()}
            />
            <div className={`${emailAddress ? 'hidden' : 'fake-line'} `}></div>
          </label>
          <label>
            <p className={`${password ? 'signed-up-password form-p' : 'form-p'}`}>Password:</p>
            <input
              className={`${password ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
              type='password'
              name='Password'
              onClick={() => this.props.raisePassword()}
            />
            <div className={`${password ? 'hidden' : 'fake-line'} `}></div>
          </label>
          <div className='form-bottom-buttons'>
            <button className='signup-button form-power-buttons' type="submit" value="Log In">
              Log In
            </button>
            <button
              className='form-other-buttons'
              onClick={(e) => this.props.changeToNewUser(e)}>
              I'm New</button>
          </div>
        </form>
        {/* <h2>sign up</h2> */}
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    return dispatch(focus('login', 'username'))
  }
})(UpdateLogin)

// export default NewLogin