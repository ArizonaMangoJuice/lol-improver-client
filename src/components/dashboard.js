import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../actions/champions';
import LoginWrapper from './loginWrapper';

export class Dashboard extends React.Component{
    componentDidMount(){   
        this.props.dispatch(fetchChampions())
    }
    render(){
        console.log(this.props.champions)
        const champions = this.props.champions.map(champ => {
            return (
                <li>
                    {champ.name}
                </li>
            )
        })
        return (
            <div>
                username {this.props.username}
                <ul>
                    {champions}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.currentUser.username,
    authToken: state.loginReducer.authToken,
    champions: state.championReducer.champions
});

export default LoginWrapper()(connect(mapStateToProps)(Dashboard));