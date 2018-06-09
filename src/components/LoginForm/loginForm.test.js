import React from 'react';
import {shallow} from 'enzyme';
import {LoginForm} from './loginForm';

describe('<LoginForm>', () => {
    it('should render without crashes', () => {
        const handleSubmit = jest.fn();
        shallow(<LoginForm handleSubmit={handleSubmit}/>);
    });
});