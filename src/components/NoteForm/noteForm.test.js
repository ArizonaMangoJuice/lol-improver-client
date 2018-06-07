import React from 'react';
import {shallow} from 'enzyme';
import {NoteForm} from './noteForm';

describe('<NoteForm />', () => {
    it('should render without crashing', () => {
        shallow(<NoteForm champions={[1,2,3,4,4]}/>);
    });
});