import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../actions/champions';
import SearchBar from './searchBar';
import ChampionCard from './championCard';

class ChampionInfo extends React.Component{
    championList(arr){
        return arr.map((champion, i) => {
            // console.log(champion);
            const imageString = champion.image.full;
            return (
                <ChampionCard 
                    key={i} 
                    src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${imageString}`}
                    name={champion.name}
                    title={champion.title}
                    userId={champion.userId}
                    id={champion.id} 
                    />
            );
        })
    }
    //connect the note to a component
    render(){
        // console.log(this.props.champions.length);
        let champs;
        if(this.props.champions.length){
            if(this.props.filteredChampions.length){
                champs = this.championList(this.props.filteredChampions);
            }else{
                champs = this.championList(this.props.champions);
                // console.log(this.props.champions);
            }
        }
        return (
            <div>
                <SearchBar />
                <div>
                    {this.props.champions.length > 0 ? champs : ''}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    champions: state.championReducer.champions,
    filteredChampions: state.championReducer.filteredChampions
})

export default connect(mapStateToProps)(ChampionInfo);
//gotta add the notes schema and add error validation