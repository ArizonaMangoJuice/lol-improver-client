import React from 'react';
import {shallow} from 'enzyme';
import {ChampionInfo} from './championInfo';

describe('<ChampionInfo />' , () =>{
    it('should render without crashing', () => {
        let champions = [{
            image:{
                full: 'hello'
            }
        }];
        let championId = '2231321';
        let filteredChampions = [];

        shallow(<ChampionInfo 
            champions={champions}
            championId={championId}
            filteredChampions={filteredChampions}
            />);
        
    });
});