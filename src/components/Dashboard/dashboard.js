import React from 'react';
// import {connect} from 'react-redux';
// import fetchChampions from '../../actions/champions';
// import LoginWrapper from '../LoginWrapper';
// import ChampionInfo from '../ChampionInfo';
// import NoteArea from '../NoteArea';
// import PlayerSearch from '../PlayerSearch';
import Header from '../Header';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faFilter, faSearch, faPlus} from '@fortawesome/free-solid-svg-icons';
// i need to account for the margins and padding so flex basis wont freak out
export class Dashboard extends React.Component{
    // componentDidMount(){   
    //     this.props.dispatch(fetchChampions())
    // }
    render(){
        return (
            <main className='main-content'>
                <Header />
                <div className='dashboard'>
                    <div className='dashboard-left-side'>
                        <div className='left-container-width'>
                            <h1 className='left-container-title'>Level up your skill</h1>
                            <div className='left-container-buttons'>
                                <div className='backdrop-wrapper-orange flex'>
                                    <button className='left-container-button'>Create Note</button>
                                </div>
                                <div className='three-dots-container'>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                </div>
                            </div>
                        </div>

                        <div className='left-container-width main-bg left-container-search-bar'>
                            <button  className='left-container-search'>
                                <FontAwesomeIcon icon={faFilter} className='white icon-margin-right'/>
                                <p className='left-container-search-text'>Quick Filters</p>
                                <FontAwesomeIcon icon={faChevronDown} className='white icon-margin-left small-icon-size'/>
                                <div className='half-border'></div>
                            </button>
                            <div className='left-container-search-input'>
                                <FontAwesomeIcon icon={faSearch} className=' search-icon'/>
                                <input type='text' placeholder='Search' className='left-container-search-input-text' />
                            </div>
                            <div className='left-container-search-people'>
                                <button className='add-button'><FontAwesomeIcon icon={faPlus} className='default-button-size'/></button>
                                <div className='players'>
                                    <div className='user-image-container search-img'>
                                     <img alt='how the user sees themselves' className='user-image' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                                    </div>
                                    <div className='user-image-container search-img'>
                                     <img alt='how the user sees themselves' className='user-image' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                                    </div>
                                    <div className='user-image-container search-img'>
                                     <img alt='how the user sees themselves' className='user-image' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                                    </div>
                                    <div className='user-image-container search-img'>
                                     <img alt='how the user sees themselves' className='user-image' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                                    </div>
                                </div>
                                <p className='player-followers'><span className='not-important-color'>and</span> 24 followers</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-right-side'>

                    </div>
                </div>
                {/* <ChampionInfo /> */}
                {/* <NoteArea /> */}
                {/* <PlayerSearch /> */}
            </main>
        )
    }
}

// export default LoginWrapper()(connect()(Dashboard));
export default Dashboard;


