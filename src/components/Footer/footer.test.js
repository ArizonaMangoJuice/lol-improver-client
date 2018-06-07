import React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';

describe('<Footer />', () => {
    it('should render without crashing', () => {
        shallow(<Footer />);
    });
});