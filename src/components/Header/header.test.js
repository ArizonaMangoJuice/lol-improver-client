import React from 'react';
import {shallow, mount} from 'enzyme';

import {Header} from './header';

describe('<Header />', () => {
    it('should render without crashing', () => {
        shallow(<Header />);
    });
});