import React from 'react';
import {connect} from 'react-redux';
import MatchInfoCard from '../MatchInfoCard';

export class MatchInfo extends React.Component{

    findPlayer(num){
        //accountId: 28128
        let accountId = this.props.accountInfo.accountId;
        let result = [];
        let tempObj = {};
        console.log(accountId);
        // console.log(this.props.matches[0].participantIdentities[6].player.accountId == accountId);
        let name = this.props.matches[num].participantIdentities.filter(participant => participant.player.accountId.toString() === accountId.toString());
        console.log('name',name)
        let participantId = name[0].participantId;
        let mainPlayerStats = this.props.matches[0].participants.filter(participant => participant.participantId === participantId);

        tempObj.mainPlayerStats = mainPlayerStats

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
                // playerChamp={this.props.champions[i]}
            />
        })
           
        
        return matches;
    }

    render(){
        let matches = this.props.matches.length && this.props.accountInfo.name
            ? this.matchList() 
            : '';
        
        return (
            <div>
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