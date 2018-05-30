import React from 'react';
import {connect} from 'react-redux';
import {searchChampion} from '../actions/champions';

function SearchBar(props){
    return (
        <input placeholder='search champions' onChange={(e => props.dispatch(searchChampion(e.target.value)))}/>
    );
}

export default connect()(SearchBar);