import React from 'react';
import IdeaForm, {SubFieldsHolder} from '../../src/components/idea-form/idea-form';
import {shallow} from 'enzyme';

const ideaFormProps = {
	formAction: ()=>true,
	formTitle: 'My title',
	label: 'Submit',
	redirectTo: 'test',
	handleSubmit: func=>func
}

test('Base rendering', ()=>{
	const ideaForm = shallow(<IdeaForm {...ideaFormProps}/>);
	expect(ideaForm).toMatchSnapshot();
});

test('Subfield rendering', ()=>
{
	const fields = [{}];
	fields.push = jest.fn()
	let subfieldholder = shallow(<SubFieldsHolder fields={[]}/>);
	expect(subfieldholder).toMatchSnapshot();

	subfieldholder = shallow(<SubFieldsHolder fields={fields}/>);
	expect(subfieldholder).toMatchSnapshot();

	subfieldholder.find('.newSectionButton').simulate('click');
	expect(fields.push).toBeCalled();
});
