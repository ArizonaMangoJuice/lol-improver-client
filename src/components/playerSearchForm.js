import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { findPlayer, clearPlayer } from '../actions/playerInfo';
import {notEmpty, trimOuterSpaces} from '../validators';

export class PlayerSearchForm extends React.Component{
    onSubmit(value){
        // console.log()
        this.props.dispatch(clearPlayer());
        this.props.dispatch(findPlayer(value.playerSearch));
        // this.props.dispatch(searchPlayer(value.playerSearch));
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
                    // validate={[notEmpty, trimOuterSpaces]}
                />
            </form>
        );
    }
}

export default (reduxForm({
    form: 'test',
    onSubmitFail: (errors, dispatch) => {
        return dispatch(focus('SignUp', 'playerSearch'));
    }
  })(PlayerSearchForm));

  //rememeber to save this stuff bro