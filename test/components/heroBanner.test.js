import React from 'react';
import HeroBanner from '../../src/components/hero-banner/hero-banner';
import {shallow} from 'enzyme';

test('Base rendering', ()=>{
	const hero = shallow(<HeroBanner />);
	expect(hero).toMatchSnapshot();
});