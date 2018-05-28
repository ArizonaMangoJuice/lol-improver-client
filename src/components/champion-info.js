import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../actions/champions';

class ChampionInfo extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchChampions());
    }

    championList(arr){
        return arr.map((champion, i) => {
            return (
                <li key={i}>
                    {champion}
                </li>
            );
        })
    }

    render(){
        console.log(this.props.champions);
        const champs = this.championList(this.props.champions);
        return (
            <ul>
                {champs}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    champions: state.championReducer.champions
})

export default connect(mapStateToProps)(ChampionInfo);