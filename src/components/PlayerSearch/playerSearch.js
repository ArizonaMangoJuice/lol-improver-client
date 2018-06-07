import React from 'react';
import {connect} from 'react-redux';
import PlayerSearchForm  from '../PlayerSearchForm';
import AccountInfo from '../AccountInfo';
import MatchInfo from '../MatchInfo';
import './index.css'

export class PlayerSearch extends React.Component{
    render(){
        let error = this.props.error 
            ? (
                <h2 className='player-search-error'>
                    {this.props.error}
                </h2>
            ) : '';
        return (
            <section className='player-matches-container'>
                {error}
                <PlayerSearchForm/>
                <AccountInfo/>  
                <MatchInfo/>     
            </section>
        );
    }
}

const mapStateToProps = state => ({
    error: state.playerReducer.error,
})

export default connect(mapStateToProps)(PlayerSearch);

