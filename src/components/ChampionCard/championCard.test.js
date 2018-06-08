import React from 'react';
import {shallow, mount} from 'enzyme';
import {ChampionCard} from './championCard';
import { championIsClicked } from '../../actions/champions';

describe('<ChampionCard />', () => {
    it('should render without crashing', ()=> {
        shallow(<ChampionCard/>);
    });
    
    it('should render with all props', ()=> {
        let src = 'dsadsa';
        let name = 'name';
        let title = 'title';
        let userId = '321312312';
        let id = '213';
        let css = 'hello';

        const wrapper =shallow(<ChampionCard
            src={src}
            name={name}
            title={title}
            userId={userId}
            id={id}
            css={css}
            />);
    });

    it('should dispatch action clicked when clicked', () => {
        let id = '164';
        const dispatch = jest.fn();
        const wrapper = mount(<ChampionCard 
            dispatch={dispatch}
            id={id}
            />);
        const button = wrapper.find('button');
        button.simulate('click');
        // console.log(wrapper.debug())
        expect(dispatch).toHaveBeenCalledWith(championIsClicked(id))
    });
});