import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../../actions/auth';
import Input from '../Input';
import { required, notEmpty } from '../../validators';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    render() {
        let error;
        if (this.props.error) {
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
                    css={'form-inputs fade-line remove-opacity'}
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
                <Link role='button' to='/register'>
                    Register
                    </Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => {
        return dispatch(focus('login', 'username'));
    },
})(LoginForm);
