import React from 'react';
import {shallow,mount} from 'enzyme';
import {Dashboard} from './dashboard';

describe('<Dashboard />', () => {
    
    it('should render without crashing', () => {
        const test = 'test';    
        shallow(<Dashboard dispatch={jest.fn()} props={test}/>);
    })
    
});