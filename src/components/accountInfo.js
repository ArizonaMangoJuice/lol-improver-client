import React from 'react';
import {connect} from 'react-redux';

export class AccountInfo extends React.Component{
    accountInfo(){
        return (
            <div className='player-card'>
                <h2>{this.props.accountInfo.name}</h2>
                <h3>level: {this.props.accountInfo.summonerLevel}</h3>
            </div>
        )
    }
    
    render(){
        let accountInfo = this.props.accountInfo ? this.accountInfo() : '';
        return (
            <div>
               {accountInfo}
            </div>
        )
    }
}

const mapStateTopProps = state => ({
    accountInfo: state.playerReducer.accountInfo
})

export default connect(mapStateTopProps)(AccountInfo)