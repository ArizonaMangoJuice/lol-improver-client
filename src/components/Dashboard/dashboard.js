import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../../actions/champions';
import LoginWrapper from '../LoginWrapper';
import ChampionInfo from '../ChampionInfo';
import NoteArea from '../NoteArea';
import PlayerSearch from '../PlayerSearch'

export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            colors: ['#4D86EA', '#418DED', '#2A9AF4', '#1BA3F8', '#11A9FB'],
            // currColor: this.state.colors[this.state.count]
            currColor: ''
        }

    }

    componentDidMount(){   
        this.props.dispatch(fetchChampions())
        this.interval = setInterval(() => {
            this.setState({
                currColor: this.state.colors[this.state.count],
                count: this.state.count += 1
            });
            console.log(this.state.currColor, this.state.count);
            // this.setState({count: this.state.count++});
            if(this.state.count >= this.state.colors.length) this.setState({count: 0});
        },2000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <main className='main-content' style={{background: this.state.currColor, transition: '2s'}}>
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
