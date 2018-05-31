import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/registerUser';
import Input from './input';
import {required, notEmpty, tooBigOrTooSmall} from '../validators';

export class RegisterForm extends React.Component{
    onSubmit(values){
        // console.log(JSON.stringify(values.username))
        let user = {
            username: values.username,
            password: values.password
        }
        return this.props.dispatch(
            registerUser(user));
    }

    render(){
        // console.log(this.props.meta)
        return (
            <form 
                onSubmit={this.props.handleSubmit(values => {
                    this.onSubmit(values)
                })}
            >
                <Field 
                    component={Input}
                    type='text'
                    name='username'
                    id='username'
                    validate={[required, notEmpty]}
                />
                <Field
                    component={Input}
                    type='password'
                    name='password'
                    id='password'
                    validate={[required, notEmpty, tooBigOrTooSmall]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signUp', 
    onSubmitFail: (errors, dispatch) => dispatch(focus('signUp', 'username'))
})(RegisterForm);