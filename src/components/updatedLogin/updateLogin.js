import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Field, reduxForm, focus } from 'redux-form'
import { login } from '../../actions/auth'
import Input from '../Input'
import { required, notEmpty } from '../../validators'

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
          <Field
            pCss={`${emailAddress ? 'signed-up-email-address form-p' : 'form-p'}`}
            pName={'Email Adress:'}
            inputCss={`${emailAddress ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${emailAddress ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="text"
            name="username"
            id="username"
            raisefunction={this.props.raiseEmail}
            validate={[required, notEmpty]}
          />

          <Field
            pCss={`${password ? 'signed-up-password form-p' : 'form-p'}`}
            pName={'Password:'}
            inputCss={`${password ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
            fakeLine={`${password ? 'hidden' : 'fake-line'}`}
            component={Input}
            type="password"
            name="password"
            id="password"
            raisefunction={this.props.raisePassword}
            validate={[required, notEmpty]}
          />

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
