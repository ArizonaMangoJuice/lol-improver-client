import React from 'react';
import {Field, reduxForm} from 'redux-form';
import NoteForm from './textAreaInput';
import {updateBackEndChampionNote} from '../actions/champions';
class NoteArea extends React.Component{
    //create action for component and add to reducer 
    onSubmit(){
        return this.props.dispatch(updateBackEndChampionNote())
    }

    render(){
        return (
        <div className='note-container'>
            <form onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
                <Field component={NoteForm} name='noteForm' />
                <button>
                    Save
                </button>
            </form>
        </div>
        )
    }
}



export default reduxForm({
    form: 'NoteText'
})(NoteArea);