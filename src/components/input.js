import React from 'react';

export default class Input extends React.Component{
    componentDidUpdate(prevProps){
        if(!prevProps.meta.active && this.props.meta.active){
            this.input.focus();
        }
    }
    render(){
        return(
            <div className='form-input'>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
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