import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from './loginForm';

describe('<LoginForm>', () => {
    it('should render without crashes', () => {
        shallow(<LoginForm />);
    });
});