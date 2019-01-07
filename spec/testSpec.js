// import React from 'react';
import React from 'react';
import Jasmine from 'jasmine';
import {render} from 'enzyme';
import {expect} from 'chai';

import {Main} from '../src/index';

const jasmine = new Jasmine();

describe('<Main />', () => {
    it('renders three', () => {
        const wrapper = render(<Main />);
        expect(wrapper.find('.container')).to.have.lengthOf(3);
    });
})

jasmine.execute();