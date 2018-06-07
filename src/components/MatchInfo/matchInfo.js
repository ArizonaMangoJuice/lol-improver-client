import React from 'react';
import {connect} from 'react-redux';
import MatchInfoCard from '../MatchInfoCard';

export class MatchInfo extends React.Component{

    findPlayer(num){
        let accountId = this.props.accountInfo.accountId;
        let result = [];
        let tempObj = {};
        let name = this.props.matches[num].participantIdentities.filter(i => i.player.currentAccountId.toString() === accountId);
        let participantId = name[0].participantId;
        let mainPlayerStats = this.props.matches[num].participants.filter(participant => participant.participantId === participantId);

        tempObj.mainPlayerStats = mainPlayerStats;

        result.push(tempObj);

        return result;
    }

    matchList(){
        let matches = this.props.matches;

        matches = matches.map((match,i) =>{
            let playerMatchDetails = this.findPlayer(i);
            
            return <MatchInfoCard 
                key={i} 
                {...match} 
                matchDetails={playerMatchDetails}
            />
        })
           
        
        return matches;
    }

    render(){
        let matches = this.props.matches.length && this.props.accountInfo.name
            ? this.matchList() 
            : '';
        
        return (
            <div className='player-matches'>
                {matches}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    matches: state.playerReducer.matches,
    accountInfo: state.playerReducer.accountInfo,
});

export default connect(mapStateToProps)(MatchInfo)