import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './searchBar';
import ChampionCard from './championCard';

class ChampionInfo extends React.Component{
    championList(arr){
        return arr.map((champion, i) => {
            const imageString = champion.image.full;
            let css;
            
            this.props.championId === champion.id
                ? css = 'clicked'
                : css = '';

            return (
                <ChampionCard 
                    key={i} 
                    src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${imageString}`}
                    name={champion.name}
                    title={champion.title}
                    userId={champion.userId}
                    id={champion.id} 
                    css={css}
                    />
            );
        })
    }
    //connect the note to a component
    render(){
        // console.log(this.props.champions);
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
                <section className='champ-container'>
                    <div className='champion-card-flex'>
                        {this.props.champions.length > 0 ? champs : ''}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    champions: state.championReducer.champions,
    filteredChampions: state.championReducer.filteredChampions,
    championId: state.championReducer.championId

})

export default connect(mapStateToProps)(ChampionInfo);
//gotta add the notes schema and add error validation