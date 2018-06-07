import React from 'react';
import {shallow} from 'enzyme';
import {ChampionCard} from './championCard';

describe('<ChampionCard />', () => {
    it('should render without crashing', ()=> {
        shallow(<ChampionCard/>);
    });
    
    // it('should render the test', ()=> {
    //     const className = 'test';
    //     const wrapper = shallow(<ChampionCard onClick={jest.fn()} props={className}/>);
    //     console.log(wrapper.debug());
    //     const champCardButton = wrapper.find('button');
    //     champCardButton.simulate('click');
        
    //     expect(wrapper.onClick).toHaveBeenCalled();
    // });
});