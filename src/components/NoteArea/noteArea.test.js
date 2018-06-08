import React from 'react';
import {shallow, mount} from 'enzyme';

import {NoteArea} from './noteArea';
import { updateBackEndChampionNote } from '../../actions/champions';

jest.mock('../actions')

describe('</NoteArea>', () => {
    it('should render without crashing', () => {
        shallow(<NoteArea />)        
    });

    it('should run the action updateBackEndChampionNote', () => {
        const championId = 'text';
        // const handleSubmit = jest.fn();
        const dispatch = jest.fn();
        const onSubmit = jest.fn();
        
        const handleSubmit = jest.fn();
        const wrapper = shallow(<NoteArea championId={championId} handleSubmit={handleSubmit} />);
        wrapper.find('button').simulate('click');
        expect(handleSubmit).toHaveBeenCalledWith(wrapper.instance().submit)
        // t.true(handleSubmit.calledWith(wrapper.instance().submit));

    })
});

//const wrapper = mount