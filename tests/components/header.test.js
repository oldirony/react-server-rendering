import React from 'react';
import Header from '../../src/components/header/header';
import {shallow, mount} from 'enzyme';
import {wrapper} from '../helper';

import config from '../../src/config';


test('Base rendering', ()=>{
	const header = shallow(wrapper(<Header authed={true}/>));
	expect(header).toBeTruthy();
});

describe('Auth states', ()=>{
	let header;
	const renderHeader = (authed)=>mount(wrapper(<Header authed={authed}/>));

	beforeAll(()=>{})

	test('Show right buttons when not authenticated',  ()=>{
		header = renderHeader(false);

		expect(header.find('a').first().node.href).toEqual(config.routes.signup);
		expect(header.find('a').last().node.href).toEqual(config.routes.login);
	})

	test('Show right buttons when not authenticated',  ()=>{
		header = renderHeader(true);

		expect(header.find('a').node.href).toEqual(config.routes.addNewIdea);
		expect(header.find('button').first().text()).toEqual('Hide completed');
		expect(header.find('button').last().text()).toEqual('Logout');
	})
})