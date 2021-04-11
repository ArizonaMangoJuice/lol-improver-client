import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

describe('<App />', function (){
    it('renders without crashing', () => {
        shallow(<App />);
    })
})

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './app';

// test("renders the correct content", () => {
//     const root = document.createElement("div");
//     ReactDOM.render(<App/>, root);
// });