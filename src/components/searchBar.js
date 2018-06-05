import React from 'react';
import {connect} from 'react-redux';
import {searchChampion} from '../actions/champions';

function SearchBar(props){
    return (
        <section role='region' id='search-champ-container'>
            <label htmlFor='search-bar'>Search Champions</label>
            <input id='search-bar' className='search-bar' placeholder='zac, ahri' onChange={(e => props.dispatch(searchChampion(e.target.value)))}/>
        </section>
    );
}

export default connect()(SearchBar);