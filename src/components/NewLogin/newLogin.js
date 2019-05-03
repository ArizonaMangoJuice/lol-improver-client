import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import { login } from '../../actions/auth'
import Input from '../Input';
import UpdateLogin from '../updatedLogin';
import UpdateSignUp  from '../updatedSignup/UpdatedSignup';


export class NewLogin extends React.Component {
  constructor(props) {
    super(props)

    this.changeToNewUser = this.changeToNewUser.bind(this)
    this.raisePassword = this.raisePassword.bind(this)
    this.raiseEmail = this.raiseEmail.bind(this)
    this.changeToLogin = this.changeToLogin.bind(this)
    this.raiseFullName = this.raiseFullName.bind(this)
    this.raisePhoneNumber = this.raisePhoneNumber.bind(this)
    this.raiseConfirmPassword = this.raiseConfirmPassword.bind(this)


    this.state = {
      moveLogin: false,
      moveSignup: false,
      fullName: false,
      emailAddress: false,
      phoneNumber: false,
      password: false,
      confirmPassword: false,
      loginEmail: false,
      loginPassword: false,
    }
  }

  raiseEmail() {
    this.setState({ emailAddress: true })
  }

  raisePassword() {
    this.setState({ password: true })
  }

  raiseFullName() {
    this.setState({ fullName: true })
  }

  raisePhoneNumber() {
    this.setState({ phoneNumber: true })
  }

  raiseConfirmPassword() {
    this.setState({ confirmPassword: true })
  }

  changeToNewUser(e) {
    this.setState({ moveLogin: false, moveSignup: true });
    e.preventDefault();
    return;
  }

  changeToLogin(e) {
    this.setState({ moveLogin: true, moveSignup: false });
    e.preventDefault();
    return;
  }

  onLoginSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    const moveLogin = this.state.moveLogin
    const moveSignup = this.state.moveSignup
    const fullName = this.state.fullName
    const emailAddress = this.state.emailAddress
    const phoneNumber = this.state.phoneNumber
    const password = this.state.password
    const confirmPassword = this.state.confirmPassword
    const loginEmail = this.state.loginEmail
    const loginPassword = this.state.loginPassword

    return (
      <div className='landing-page-login-container'>
        <div className='left-cover'>
          <img className='form-logo' src={require('../../images/logo.png')}></img>
          <div className='left-cover-title'>
            <h1>LOL IMPROVER</h1>
            <h2>Game On</h2>
          </div>
        </div>
        <div className={`${moveLogin ? 'moveSignup sign-up' : moveSignup ? 'moveSignupRight sign-up' : 'sign-up'} `}>
          <UpdateLogin
            emailAddress={emailAddress}
            password={password}
            changeToNewUser={this.changeToNewUser}
            raisePassword={this.raisePassword}
            raiseEmail={this.raiseEmail}
          />
        </div>
        <div className={`${moveLogin ? 'moveLogin login' : moveSignup ? 'moveLoginRight login' : 'login'}`}>
          <UpdateSignUp
            emailAddress={emailAddress}
            password={password}
            fullName={fullName}
            phoneNumber={phoneNumber}
            confirmPassword={confirmPassword}
            changeToLogin={this.changeToLogin}
            raiseFullName={this.raiseFullName}
            raiseEmail={this.raiseEmail}
            raisePassword={this.raisePassword}
            raiseConfirmPassword={this.raiseConfirmPassword}
            raisePhoneNumber={this.raisePhoneNumber}
          />
        </div>
      </div>
    )
  }
}

// export default reduxForm({
//   form: {'login', 'signUp'},
//   onSubmitFail: (errors, dispatch) => {
//     return dispatch(focus('login', 'username'))
//   }
// })(NewLogin)

export default NewLogin

// export default NewLogin