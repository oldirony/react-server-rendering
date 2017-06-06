import React from 'react';
import InputWithValidation from '../../src/components/input-with-validation/input-with-validation';

const props = {
	meta: {
		touched: true
	},
	placeholder: "placeholder"
}
test('Base rendering', ()=>{
	let input = shallow(<InputWithValidation {...props}/>);
	expect(input).toMatchSnapshot();

	input = shallow(<InputWithValidation {...props} meta={
		{...props.meta, error: 'Big error'}
	}/>);

	expect(input).toMatchSnapshot();
});