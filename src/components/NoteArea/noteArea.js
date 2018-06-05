import React from 'react';
import {Field, reduxForm} from 'redux-form';
import NoteForm from '../NoteForm';
import {updateBackEndChampionNote} from '../../actions/champions';
import {connect} from 'react-redux';
import './index.css';

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
            <div className={`${this.props.championId ? 'note-container' : 'noNote'}`}>
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