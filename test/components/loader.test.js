import React from 'react';
import Loader from '../../src/components/loader/loader';

test('It renders correcly', ()=>{
	let loader = shallow(<Loader isVisible={false}/>);

	expect(loader).toMatchSnapshot();

	loader = shallow(<Loader isVisible={true} message={'Doing things'}/>);

	expect(loader).toMatchSnapshot();
})