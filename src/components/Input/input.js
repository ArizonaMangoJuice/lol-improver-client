import React from 'react';

export default class Input extends React.Component{
    componentDidUpdate(prevProps){
        if(!prevProps.meta.active && this.props.meta.active){
            this.input.focus();
        }
    }
    render(){
        //you validate in the input and you have to do it to the login 
        //as well you also have to make when there is an error it takes
        //you to the input as well
        let error;
        if(this.props.meta.error && this.props.meta.touched){
            console.log(this.props.meta.error);
            error = (
                <label className='formError'>
                    {this.props.meta.error}
                </label>
            )
        }
        return(
            <div className='form-input'>
                <label 
                    htmlFor={this.props.input.name} 
                    className={error ? 'validation-error' : 'label'}
                >
                    {error ? error : this.props.label}
                </label>
                <input 
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </div>
        );
    }
}