import React from 'react';
import {connect} from 'react-redux';
import {updateChampionNote} from '../../actions/champions';

class NoteForm extends React.Component{

    addChampionNote(value){
        this.props.dispatch(updateChampionNote(value));
    }

    render(){
        let label = this.props.champions.filter(champ => champ.id === this.props.championId);
        
        if(label.length){
            label = (
                <label htmlFor='champ-note'>
                    {label[0].name}
                </label>
            )
        }

        let textarea = (
                <textarea 
                    id='champ-note'
                    value={this.props.note} 
                    onChange={(e) => this.addChampionNote(e.target.value)}
                >
                </textarea>
            );

        return (
                <div>
                    {label}
                    {textarea}
                </div>
        )
    }
}
 //nice you got the textarea to work now make actions and add to reducer
const mapStateToProps = state => ({
    note: state.championReducer.note,
    champions: state.championReducer.champions,
    championId: state.championReducer.championId
});

export default connect(mapStateToProps)(NoteForm);