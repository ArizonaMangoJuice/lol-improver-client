import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../Input';
import { findPlayer, clearPlayer } from '../../actions/playerInfo';

export class PlayerSearchForm extends React.Component{
    onSubmit(value){
        this.props.dispatch(clearPlayer());
        this.props.dispatch(findPlayer(value.playerSearch));
    }
    render(){
        return (
            <form id='player-search-form' onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
                <Field
                    component={Input}
                    type='text'
                    name='playerSearch'
                    id='playerSearch'
                    label='playerSearch'
                />
            </form>
        );
    }
}

export default (reduxForm({
    form: 'test',
  })(PlayerSearchForm));

  //rememeber to save this stuff bro