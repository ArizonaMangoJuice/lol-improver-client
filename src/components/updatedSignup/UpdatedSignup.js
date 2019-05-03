import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import { login } from '../../actions/auth'
import Input from '../Input';

export class UpdateSignUp extends React.Component {
  constructor(props) {
    super(props)
  }

  onLoginSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    let password = this.props.password
    let emailAddress = this.props.emailAddress
    let phoneNumber = this.props.phoneNumber
    let fullName = this.props.fullName
    let confirmPassword = this.props.confirmPassword

    return (
      <div className='signup-container'>
        <form>
          <label>
            <p className={`${fullName ? 'signed-up-full-name form-p' : 'form-p'}`}>Full Name:</p>
            <input
              className={`${fullName ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
              type='text'
              name='Name'
              onClick={() => this.props.raiseFullName()}
            />
            <div className={`${fullName ? 'hidden' : 'fake-line'} `}></div>
          </label>
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
            <p className={`${phoneNumber ? 'signed-up-phone-number form-p' : 'form-p'}`}>Phone Number: - optional</p>
            <input
              className={`${phoneNumber ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
              type='tel' name='Phone'
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onClick={() => this.props.raisePhoneNumber()}
            />
            <div className={`${phoneNumber ? 'hidden' : 'fake-line'} `}></div>
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
          <label>
            <p className={`${confirmPassword ? 'signed-up-confirm-password form-p' : 'form-p'}`}>confirm Password:</p>
            <input
              className={`${confirmPassword ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
              type='password'
              name='Password'
              onClick={() => this.props.raiseConfirmPassword()}
            />
            <div className={`${confirmPassword ? '' : 'fake-line'} `}></div>
          </label>
          <div className='form-bottom-buttons'>
            <input className='signup-button form-power-buttons' type="submit" value="Sign Up Now" />
            <button
              className='form-other-buttons'
              ref='button'
              onClick={(e) => this.props.changeToLogin(e)}>
              Log In</button>
          </div>
        </form>
        {/* <h2>login</h2> */}
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    return dispatch(focus('login', 'username'))
  }
})(UpdateSignUp)

// export default NewLogin