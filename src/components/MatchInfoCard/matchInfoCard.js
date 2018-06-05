import React from 'react';
import { fetchNameDetails } from '../../actions/playerInfo';
import {connect} from 'react-redux';

export class MatchInfoCard extends React.Component{
    killDeathRatio(kills, assists, deaths){
        let kda = (kills + assists) / deaths;
        return Math.round(kda * 100) / 100;
    }

    dateString(epochTime){
        let time = new Date(epochTime);
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let year = time.getFullYear();
    
        return `${month}/${day}/${year}`;
    }

    render(){
    // console.log(this.props);
    let time = this.dateString(this.props.gameCreation);
    let kills = this.props.matchDetails[0].mainPlayerStats[0].stats.kills;
    let deaths = this.props.matchDetails[0].mainPlayerStats[0].stats.deaths;
    let assists = this.props.matchDetails[0].mainPlayerStats[0].stats.assists;
    let kda = this.killDeathRatio(kills, assists, deaths);
    let level = this.props.matchDetails[0].mainPlayerStats[0].stats.champLevel;
    let minions = this.props.matchDetails[0].mainPlayerStats[0].stats.totalMinionsKilled;
    let neutralMinions = this.props.matchDetails[0].mainPlayerStats[0].stats.neutralMinionsKilled;
    let matchOutcome = this.props.matchDetails[0].mainPlayerStats[0].stats.win ? 'Victory': 'Defeat';
    let championId = this.props.matchDetails[0].mainPlayerStats[0].championId;
    let playerChampArr;

    if(this.props.champions.length === 0){
        this.props.dispatch(fetchNameDetails(championId))
    }

    if(this.props.champions.length === 3){
        playerChampArr = this.props.champions.filter(champ => champ[0].champId === championId.toString());
    }
    
    let playerChampSrc = playerChampArr 
        ? `http://ddragon.leagueoflegends.com/cdn/7.24.1/img/champion/${playerChampArr[0][0].key}.png` 
        : '';

    let playerChampName = playerChampArr ? playerChampArr[0][0].name : '';
    
    let matchOutcomeCss = matchOutcome === 'Victory' ? 'win' : 'defeat';

    //clean code up and make the input run the dispatch than clean the server side dawg..
    return (
        <div className={`match-card ${matchOutcomeCss}`}>
            <div className='player-champ'>
                <h2>{playerChampName}</h2>
                <div className='player-image'>
                    <img src={playerChampSrc} alt={playerChampName}/>
                </div>
            </div>
            <div className='kill-stats'>
                <p>{kills}/{deaths}/{assists}</p>
                <p>{kda}:1 KDA</p>
                <p>{time}</p>
            </div>
            <div className='stats'>
                <p>level {level}</p>
                <p>{minions + neutralMinions} cs</p>
                <p>{matchOutcome}</p>
            </div>
        </div>
    )}
}

const mapStateToProps = state => ({
    champions: state.playerReducer.playerChampInfo
})

export default connect(mapStateToProps)(MatchInfoCard);