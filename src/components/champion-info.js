import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../actions/champions';
import SearchBar from './searchBar';
class ChampionInfo extends React.Component{
    

    championList(arr){
        return arr.map((champion, i) => {
            const imageString = champion.image.full;
            return (
                <li key={i}>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${imageString}`} />
                    <h2>{champion.name}</h2>
                    <h3>{champion.title}</h3>
                </li>
            );
        })
    }

    render(){
        // console.log(this.props.champions.length);
        let champs;
        if(this.props.champions.length){
            if(this.props.filteredChampions.length){
                champs = this.championList(this.props.filteredChampions);
            }else{
                champs = this.championList(this.props.champions);
                console.log(this.props.champions);
            }
        }
        // console.log(champs);
        return (
            <div>
                <SearchBar />
                <ul>
                    {this.props.champions.length > 0 ? champs : ''}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    champions: state.championReducer.champions,
    filteredChampions: state.championReducer.filteredChampions
})

export default connect(mapStateToProps)(ChampionInfo);