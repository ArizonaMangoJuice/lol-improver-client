import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/registerUser';
import Input from './input';
import {required, notEmpty, tooBigOrTooSmall, spacesInUsername} from '../validators';
import {Link} from 'react-router-dom';

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
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >   
                {error}
                <Field 
                    component={Input}
                    type='text'
                    name='username'
                    id='username'
                    label='Username'
                    validate={[required, notEmpty, spacesInUsername]}
                />
                <Field
                    component={Input}
                    type='password'
                    name='password'
                    id='password'
                    label='Password'
                    validate={[required, notEmpty, tooBigOrTooSmall]}
                />
                <div>
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Sign Up
                    </button>
                    <Link to='/'>
                        Login
                    </Link>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signUp', 
    onSubmitFail: (errors, dispatch) => {
        console.log('on submitFail',errors);
        return dispatch(focus('signUp', 'username'));
    },
})(RegisterForm);