import React from 'react';
import {shallow} from 'enzyme';
import {LandingPage} from './landingPage';

describe('<LandingPage />', () => {
    it('should render without crashing', () => {
        shallow(<LandingPage />)
    });
});