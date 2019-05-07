import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import Input from '../Input'
import { registerUser } from '../../actions/registerUser'
import { required, notEmpty, tooBigOrTooSmall, spacesInUsername } from '../../validators'
import { formValues } from 'redux-form'
import { formValueSelector } from 'redux-form'



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

    if(this.props.signedUp){
      this.props.redirectTest(this.props.hasEmailValue, this.props.hasPasswordValue);
    }

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


// normal wrapper  for reduxform
let UpdatedSignUp = reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) => {
    return dispatch(focus('signUp', 'username'))
  }
})(UpdateSignUp)

//use the selector to get the values of the form
const selector = formValueSelector('signUp')


// use the wrapper of connect to use information from state
//will have to refactor to include this in the state
UpdatedSignUp = connect(
  state => {
    const hasEmailValue = selector(state, 'username')
    const hasPasswordValue = selector(state, 'password')
    
    return {
      hasEmailValue,
      hasPasswordValue,
      signedUp: state.loginReducer.signedUp
    }
  }
)(UpdatedSignUp)



export default UpdatedSignUp