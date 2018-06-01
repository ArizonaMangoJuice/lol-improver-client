import React from 'react';
import {connect} from 'react-redux';
import {searchChampion} from '../actions/champions';

function SearchBar(props){
    return (
        <div>
            <label htmlFor='search-bar'>Search Champions</label>
            <input id='search-bar' className='search-bar' placeholder='zac, ahri' onChange={(e => props.dispatch(searchChampion(e.target.value)))}/>
        </div>
    );
}

export default connect()(SearchBar);