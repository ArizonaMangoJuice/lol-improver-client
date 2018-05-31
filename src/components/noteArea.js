import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import NoteForm from './textAreaInput';
import {updateBackEndChampionNote} from '../actions/champions';
class NoteArea extends React.Component{
    //create action for component and add to reducer 
    onSubmit(value){
        const id = this.props.id;
        const note = this.props.note;
        return this.props.dispatch(updateBackEndChampionNote(id, note))
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
                <Field component={NoteForm} name='noteForm' />
                <button>
                    Save
                </button>
            </form>
        )
    }
}



export default reduxForm({
    form: 'NoteText'
})(NoteArea);