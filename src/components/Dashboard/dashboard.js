import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../../actions/champions';
import LoginWrapper from '../LoginWrapper';
import ChampionInfo from '../ChampionInfo';
import NoteArea from '../NoteArea';
import PlayerSearch from '../PlayerSearch'

export class Dashboard extends React.Component{
    componentDidMount(){   
        this.props.dispatch(fetchChampions())
    }
    render(){
        return (
            <main className='main-content'>
                <section className='demo-players'>
                    <section>
                        <p>
                            Try searching for these players:
                        </p>
                        <ul>
                            <li>
                                ScrubNoob
                            </li>
                            <li>
                                L 5 22 9
                            </li>
                            <li>
                                Grig1
                            </li>
                            <li>
                                TCLB Robin NA
                            </li>
                            <li>
                                IlIlIllllIIIIIII
                            </li>
                            <li>
                                Tony Top
                            </li>
                        </ul>
                    </section>
                </section>
                <ChampionInfo />
                <NoteArea />
                <PlayerSearch />
            </main>
        )
    }
}

export default LoginWrapper()(connect()(Dashboard));

