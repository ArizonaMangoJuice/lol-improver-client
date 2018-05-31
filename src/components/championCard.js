import React from 'react';
import {connect} from 'react-redux';
import {championIsClicked} from '../actions/champions';

class ChampionCard extends React.Component{
    showNote(id){
        //dispatch to store add notes than create component that dispatches
        //every time you type something
        this.props.dispatch(championIsClicked(id));
        // console.log(id)//create a component for the text to show.
    }

    render(){//start seeing if the action works
        // console.log(this.props)
        return (
            <div key={this.props.key} onClick={() => this.showNote(this.props.id)}>
                <img src={this.props.src} />
                <h2>{this.props.name}</h2>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    champions: state.championReducer.champions
});

export default connect()(ChampionCard);