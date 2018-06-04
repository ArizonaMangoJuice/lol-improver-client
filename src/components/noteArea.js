import React from 'react';
import {Field, reduxForm} from 'redux-form';
import NoteForm from './textAreaInput';
import {updateBackEndChampionNote} from '../actions/champions';
import {connect} from 'react-redux';

class NoteArea extends React.Component{
    //create action for component and add to reducer 
    onSubmit(){
        return this.props.dispatch(updateBackEndChampionNote())
    }



    render(){

        let textArea = this.props.championId 
            ? (<form onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
                        <Field component={NoteForm} name='noteForm' />
                        <button>
                            Save
                        </button>
                    </form> )
            : ''

        console.log(textArea)
        return (
            <div className={`note-container ${this.props.championId ? '' : 'noNote'}`}>
                {textArea}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    championId: state.championReducer.championId
});

export default connect(mapStateToProps)(reduxForm({
    form: 'NoteText'})(NoteArea))