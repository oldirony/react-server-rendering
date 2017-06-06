import React from 'react';
import LoginForm from '../../src/components/login-form/login-form';

const props = {
	handleSubmit: func => func.bind(null, {})
}

test('It renders correcly', ()=>{
	let form = shallow(<LoginForm {...props}/>);
	expect(form).toMatchSnapshot();

	form = shallow(<LoginForm {...props} authError="Error message"/>);
	expect(form).toMatchSnapshot();
})