import React from 'react';
import { fetchNameDetails, fetchSummonerSpell, fetchItemDetails } from '../../actions/playerInfo';
import {connect} from 'react-redux';
import './index.css';

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
    // console.log(this.props.champions)
    let gameMode = this.props.gameMode;
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
    let gameMinutes = Math.floor(this.props.gameDuration / 60);
    let gameSeconds = Math.ceil((this.props.gameDuration / 60 -gameMinutes) * 60);
    let gameDuration = `${gameMinutes}m:${gameSeconds}s`;
    let playerChampArr;
    let timeLeft = (new Date()).getTime() - this.props.gameCreation;
    let days = Math.round((((timeLeft / 1000) / 60) / 60) / 24);
    let spellId1 = this.props.matchDetails[0].mainPlayerStats[0].spell1Id;
    let spellId2 = this.props.matchDetails[0].mainPlayerStats[0].spell2Id;

    let item0 = this.props.matchDetails[0].mainPlayerStats[0].stats.item0;    
    let item1 = this.props.matchDetails[0].mainPlayerStats[0].stats.item1;
    let item2 = this.props.matchDetails[0].mainPlayerStats[0].stats.item2;
    let item3 = this.props.matchDetails[0].mainPlayerStats[0].stats.item3;
    let item4 = this.props.matchDetails[0].mainPlayerStats[0].stats.item4;
    let item5 = this.props.matchDetails[0].mainPlayerStats[0].stats.item5;
    let item6 = this.props.matchDetails[0].mainPlayerStats[0].stats.item6;

    console.log(item0,item1,item2,item3,item4,item5,item6)


    if(this.props.champions.length === 0){
        this.props.dispatch(fetchNameDetails(championId))
        this.props.dispatch(fetchSummonerSpell(spellId2, this.props.gameCreation))
        this.props.dispatch(fetchSummonerSpell(spellId1, this.props.gameCreation))
        
        item0 === 0 ? '' : this.props.dispatch(fetchItemDetails(item0))
        item1 === 0 ? '' : this.props.dispatch(fetchItemDetails(item1))
        item2 === 0 ? '' : this.props.dispatch(fetchItemDetails(item2))
        item3 === 0 ? '' : this.props.dispatch(fetchItemDetails(item3))
        item4 === 0 ? '' : this.props.dispatch(fetchItemDetails(item4))
        item5 === 0 ? '' : this.props.dispatch(fetchItemDetails(item5))
        item6 === 0 ? '' : this.props.dispatch(fetchItemDetails(item6))

    }

    // console.log(this.props.summonerSpells ,'hello')

    let spell1IdInfo = this.props.summonerSpells.find(e => e.key === spellId1.toString());

    let spell2IdInfo = this.props.summonerSpells.find(e => e.key === spellId2.toString());
    
    // console.log(spell1IdInfo, spell2IdInfo)

    // let test= Promise.resolve(this.props.dispatch(fetchSummonerSpell(spellId1)));

    // let test2 = Promise.resolve(test);

    // test.then(value => spellId1 = value.spellInfo[0])

    // console.log(spellId1);

    
    // have to automate getting the newest version of the api so it can give the newest summoner spells

    if(this.props.champions.length === 3){
        playerChampArr = this.props.champions.filter(champ => champ[0].champId === championId.toString());
    }
    
    let summonerSpell1Image =  spell1IdInfo 
        ? `http://ddragon.leagueoflegends.com/cdn/9.12.1/img/spell/${spell1IdInfo.image.full}`
        : '';

    let summonerSpell2Image = spell2IdInfo
        ? `http://ddragon.leagueoflegends.com/cdn/9.12.1/img/spell/${spell2IdInfo.image.full}`
        : '';

    let playerChampSrc = playerChampArr 
        ? `http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${playerChampArr[0][0].key}.png` 
        : '';

    let playerChampName = playerChampArr ? playerChampArr[0][0].name : '';
    
    let matchOutcomeCss = matchOutcome === 'Victory' ? 'win' : 'defeat';

    

    //clean code up and make the input run the dispatch than clean the server side dawg..
    return (
        <div className={`match-card ${matchOutcomeCss}`}>
            <div className='match-meta-info'>
                <p>{gameMode}</p>
                <p>{days} days ago</p>
                <div className='small-line'>
                </div>
                <p>{matchOutcome}</p>
                <p>{gameDuration}</p>
            </div>
            <div className='player-champ'>
                <h2>{playerChampName}</h2>
                <div className='player-image'>
                    <img src={playerChampSrc} alt={playerChampName}/>
                    <div className='summonerSpells'>
                        <img src={summonerSpell1Image} alt={'test'}/>
                        <img src={summonerSpell2Image} alt={'test'}/>                        
                    </div>
                </div>
                <div>
                    {}
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
            </div>
        </div>
    )}
}

const mapStateToProps = state => ({
    champions: state.playerReducer.playerChampInfo,
    summonerSpells: state.playerReducer.summonerSpells,
})

export default connect(mapStateToProps)(MatchInfoCard);