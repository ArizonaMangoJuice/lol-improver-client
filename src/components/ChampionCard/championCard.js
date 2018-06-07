import React from 'react';
import {connect} from 'react-redux';
import {championIsClicked} from '../../actions/champions';
import './index.css';

export class ChampionCard extends React.Component{
    showNote(id){
        //dispatch to store add notes than create component that dispatches
        //every time you type something
        this.props.dispatch(championIsClicked(id));
        // console.log(id)//create a component for the text to show.
    }

    render(){//start seeing if the action works
        let clicked;

        this.props.css === undefined 
            ? clicked = '' 
            : clicked = this.props.css;

        return (
            <button 
                key={this.props.key} 
                onClick={() => {
                    this.showNote(this.props.id)
                }}
                className={`champion-card ${clicked}`}
            >
                <img src={this.props.src} alt={this.props.name}/>
                <div className={`champion-card-container`}>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.title}</h3>
                </div>
            </button>
        )
    }
}

export default connect()(ChampionCard);