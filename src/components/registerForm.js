import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/registerUser';
import Input from './input';

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
                />
                <Field
                    component={Input}
                    type='password'
                    name='password'
                    id='password'
                />
                <button>
                    Sign Up
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signUp', 
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(RegisterForm);