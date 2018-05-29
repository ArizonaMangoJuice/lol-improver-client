import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../actions/auth';
import Input from './input';

export class LoginForm extends React.Component{
    onSubmit(values){
        return this.props.dispatch(login(values.username, values.password));
    }
    render(){
        let error; 
        if(this.props.error){
            error = (
                <div>
                    {this.props.error}
                </div>
            )
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                />
                <button >
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
