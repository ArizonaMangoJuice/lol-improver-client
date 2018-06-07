import React from 'react';
import {shallow, mount} from 'enzyme';

import {NoteArea} from './noteArea';

describe('</NoteArea>', () => {
    it('should render without crashing', () => {
        shallow(<NoteArea />)        
    });
});

//const wrapper = mount