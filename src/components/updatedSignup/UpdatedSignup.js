import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from '../Input'
import { registerUser } from '../../actions/registerUser'
import { required, notEmpty, tooBigOrTooSmall, spacesInUsername } from '../../validators';


export class UpdateSignUp extends React.Component {
  constructor(props) {
    super(props)

  }

  onSignupSubmit(values) {
    let user = {
      username: values.username,
      password: values.password
    }
    return this.props.dispatch(registerUser(user))
  }

  render() {
    let password = this.props.password
    let emailAddress = this.props.emailAddress
    let phoneNumber = this.props.phoneNumber
    let fullName = this.props.fullName
    let confirmPassword = this.props.confirmPassword

    return (
      <div className='signup-container'>
        <form onSubmit={this.props.handleSubmit(values => this.onSignupSubmit(values))}>

          <Field
            pCss={`${fullName ? 'signed-up-full-name form-p' : 'form-p'}`}
            pName={'Username:'}
            inputCss={`${fullName ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${fullName ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="text"
            name="username"
            id="username"
            raisefunction={this.props.raiseFullName}
            validate={[required, notEmpty, spacesInUsername]}
          />


          {/* Not implemented yet */}
          {/* <Field
            pCss={`${emailAddress ? 'signed-up-email-address form-p' : 'form-p'}`}
            pName={'Email Address: -optional '}
            inputCss={`${emailAddress ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${emailAddress ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="text"
            name="username"
            id="username"
            raisefunction={this.props.raiseEmail}
            validate={[required, notEmpty]}
          /> */}


          {/* Not implemented yet */}
          {/* <Field
            pCss={`${phoneNumber ? 'signed-up-phone-number form-p' : 'form-p'}`}
            pName={'phone Number '}
            inputCss={`${phoneNumber ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${phoneNumber ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="text"
            name="username"
            id="username"
            raisefunction={this.props.raisePhoneNumber}
            validate={[required, notEmpty]}
          /> */}



          <Field
            pCss={`${password ? 'signed-up-password form-p' : 'form-p'}`}
            pName={'password'}
            inputCss={`${password ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${password ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="password"
            name="password"
            id="password"
            raisefunction={this.props.raisePassword}
            validate={[required, notEmpty, tooBigOrTooSmall]}
          />

          <div className='form-bottom-buttons'>
            {/* <input className='signup-button form-power-buttons' type="submit" value="Sign Up Now" /> */}
            <button className='signup-button form-power-buttons' disabled={this.props.pristine || this.props.submitting}>
              Sign Up
            </button>
            <button
              className='form-other-buttons'
              ref='button'
              onClick={(e) => this.props.changeToLogin(e)}>
              Log In
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) => {
    return dispatch(focus('signUp', 'username'))
  }
})(UpdateSignUp)
