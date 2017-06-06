import React from 'react';
import Signup from '../../src/components/signup-form/signup-form';

const props = {
	handleSubmit: func => func.bind(null, {})
}

test('It renders correctly', ()=>{
	let form = shallow(<Signup {...props}/>);
	expect(form).toMatchSnapshot();
})

test('It renders error message correctly', ()=>{
	let form = shallow(<Signup {...props} authError="Error message"/>);
	expect(form).toMatchSnapshot();
})