import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../../actions/auth';
import Input from '../Input';
import {required, notEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import { signUpAgain } from '../../actions/auth';

export class LoginForm extends React.Component{
    onSubmit(values){
        return this.props.dispatch(login(values.username, values.password));
    }

    removeSignedUp(){
        return this.props.dispatch(signUpAgain());
    }

    render(){
        let error;
        if(this.props.error){
            error = (
                <label className='validation-error'>
                    {this.props.error}
                </label>
            ) 
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <h2 className='form-title'>Login</h2>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    label='Username'
                    validate={[required, notEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    label='Password'
                    validate={[required, notEmpty]}
                />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    <Link role='button' to='/register' onClick={() => this.removeSignedUp()}>
                        Register
                    </Link>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        signedUp: state.loginReducer.signedUp
    };
};

export default connect(mapStateToProps)(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => {
        return dispatch(focus('login', 'username'));
    },
})(LoginForm));
