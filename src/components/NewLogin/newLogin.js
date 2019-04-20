import React from 'react'
import {connect} from 'react-redux'
import './index.css'

export class NewLogin extends React.Component{
  constructor(props){
    super(props)

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

  render(){
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
                    <div className='login-container'>
                            <form>
                                <label>
                                    <p className={`${emailAddress ? 'signed-up-email-address form-p' : 'form-p'}`}>Email Adress:</p>
                                    <input 
                                    className={`${emailAddress ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='text' 
                                    name='Email'
                                    onClick={() => this.setState({emailAddress: true})}
                                    />
                                    <div className={`${emailAddress ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <label>
                                    <p className={`${password ? 'signed-up-password form-p' : 'form-p'}`}>Password:</p>
                                    <input 
                                    className={`${password ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='password' 
                                    name='Password' 
                                    onClick={() => this.setState({password: true})}
                                    />
                                    <div className={`${password ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <div className='form-bottom-buttons'>
                                  <input className='signup-button form-power-buttons' type="submit" value="Log In" />
                                  <button 
                                  className='form-other-buttons'
                                  onClick={(e) => {
                                    this.setState({moveLogin: false, moveSignup: true});
                                    e.preventDefault();
                                    return;
                                  }}>                          
                                  I'm New</button>
                                </div>
                            </form>
                            {/* <h2>sign up</h2> */}
                        </div>
                    </div>
                    <div 
                      className={`${moveLogin ? 'moveLogin login' : moveSignup ? 'moveLoginRight login' :'login'}`} 
                      // onAnimationEnd={() => this.setState({fade: false})}
                      >
                        <div className='signup-container'>
                            <form>
                                <label>
                                    <p className={`${fullName ? 'signed-up-full-name form-p' : 'form-p'}`}>Full Name:</p>
                                    <input 
                                      className={`${fullName ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                      type='text' 
                                      name='Name' 
                                      onClick={() => this.setState({fullName: true})}
                                      />
                                    <div className={`${fullName ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <label>
                                    <p className={`${emailAddress ? 'signed-up-email-address form-p' : 'form-p'}`}>Email Adress:</p>
                                    <input 
                                    className={`${emailAddress ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='text' 
                                    name='Email'
                                    onClick={() => this.setState({emailAddress: true})}
                                    />
                                    <div className={`${emailAddress ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <label>
                                    <p className={`${phoneNumber ? 'signed-up-phone-number form-p' : 'form-p'}`}>Phone Number: - optional</p>
                                    <input 
                                    className={`${phoneNumber ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='tel' name='Phone'  
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    onClick={() => this.setState({phoneNumber: true})}
                                    />
                                    <div className={`${phoneNumber ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <label>
                                    <p className={`${password ? 'signed-up-password form-p' : 'form-p'}`}>Password:</p>
                                    <input 
                                    className={`${password ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='password' 
                                    name='Password' 
                                    onClick={() => this.setState({password: true})}
                                    />
                                    <div className={`${password ? 'hidden': 'fake-line'} `}></div>
                                </label>
                                <label>
                                    <p className={`${confirmPassword ? 'signed-up-confirm-password form-p' : 'form-p'}`}>confirm Password:</p>
                                    <input 
                                    className={`${confirmPassword ? 'form-inputs fade-line remove-opacity' : 'form-inputs'}`}
                                    type='password'
                                    name='Password' 
                                    onClick={() => this.setState({confirmPassword: true})}                                    
                                    />
                                    <div className={`${confirmPassword ? '': 'fake-line'} `}></div>
                                </label>
                                <div className='form-bottom-buttons'>
                                  <input className='signup-button form-power-buttons' type="submit" value="Sign Up Now" />
                                  <button 
                                  className='form-other-buttons'
                                  ref='button'
                                  onClick={(e) => {
                                    this.setState({moveLogin: true, moveSignup: false});
                                    e.preventDefault();
                                    return;
                                  }}>
                                  Log In</button>
                                </div>
                            </form>
                            {/* <h2>login</h2> */}
                        </div>
                        
                    </div>
        </div>
    )
  }
}


export default NewLogin