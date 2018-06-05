import React from 'react';
import {connect} from 'react-redux';
import PlayerSearchForm  from '../PlayerSearchForm';
import AccountInfo from '../AccountInfo';
import MatchInfo from '../MatchInfo';

export class PlayerSearch extends React.Component{
    render(){
        return (
            <div>
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
