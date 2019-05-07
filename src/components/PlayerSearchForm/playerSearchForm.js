import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { findPlayer, clearPlayer } from '../../actions/playerInfo';
import playerSearchInput from '../PlayerSearchInput';

export class PlayerSearchForm extends React.Component{
    onSubmit(value){
        this.props.dispatch(clearPlayer());
        this.props.dispatch(findPlayer(value.playerSearch));
    }
    render(){
        return (
            <form id='player-search-form' onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
                <Field
                    component={playerSearchInput}
                    type='text'
                    name='playerSearch'
                    id='playerSearch'
                    label='playerSearch'
                    button={true}
                    buttonClass='search-player-button'
                />
            </form>
        );
    }
}

export default (reduxForm({
    form: 'test',
  })(PlayerSearchForm));

  //rememeber to save this stuff bro