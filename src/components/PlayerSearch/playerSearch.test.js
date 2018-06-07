import React from 'react';
import {shallow} from 'enzyme';
import {PlayerSearch} from './playerSearch';

describe('<PlayerSearch />', () => {
    it('should render without crashing', () => {
        shallow(<PlayerSearch />)
    });
});