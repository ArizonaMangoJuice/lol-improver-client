import React from 'react';
import {connect} from 'react-redux';
import PlayerSearchForm  from './playerSearchForm';
import AccountInfo from './accountInfo';
import MatchInfo from './matchInfo';

export class PlayerSearch extends React.Component{
    render(){
        return (
            <div>
                <h1>Search A Player</h1>
                <PlayerSearchForm/>
                <AccountInfo/>  
                <MatchInfo/>     
            </div>
        );
    }
}

export default connect()(PlayerSearch);
//create component for account user 
//create component for matches 
