import React from 'react';
import {shallow, mount} from 'enzyme';

import {NoteArea} from './noteArea';
import { updateBackEndChampionNote } from '../../actions/champions';

describe('</NoteArea>', () => {
    it('should render without crashing', () => {
        shallow(<NoteArea />)        
    });
});

//const wrapper = mount