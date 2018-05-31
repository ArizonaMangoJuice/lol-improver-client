import React from 'react';
import {connect} from 'react-redux';
import {updateChampionNote} from '../actions/champions';

class NoteForm extends React.Component{

    onSubmit(){
        
    }

    addChampionNote(value){
        this.props.dispatch(updateChampionNote(value));
    }

    render(){
        return (
                <textarea 
                    value={this.props.note} 
                    onChange={(e) => this.addChampionNote(e.target.value)}>
                </textarea>
            
        )
    }
}
 //nice you got the textarea to work now make actions and add to reducer
const mapStateToProps = state => ({
    note: state.championReducer.note,
    id: state.loginReducer.currentUser.id
});

export default connect(mapStateToProps)(NoteForm);